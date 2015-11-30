
#import "AppDelegate.h"
#import "EJJavaScriptView.h"
#import "ABYContextManager.h"
#import "ABYServer.h"

@interface AppDelegate ()
@property (strong, nonatomic) ABYContextManager* contextManager;
@property (strong, nonatomic) ABYServer* replServer;
@end

@implementation AppDelegate
@synthesize window;

#pragma mark -
#pragma mark Application lifecycle

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
	// Optionally set the idle timer disabled, this prevents the device from sleep when
	// not being interacted with by touch. ie. games with motion control.
	application.idleTimerDisabled = YES;
	
	window = [[UIWindow alloc] initWithFrame:UIScreen.mainScreen.bounds];
	[self loadViewControllerWithScriptAtPath:@"index.js"];
    
    EJJavaScriptView* appView = (EJJavaScriptView*)window.rootViewController.view;
    JSGlobalContextRef ctx = appView.jsGlobalContext;
    
    NSURL* compilerOutputDirectory = [[self privateDocumentsDirectory] URLByAppendingPathComponent:@"cljs-out"];
    [self createDirectoriesUpTo:compilerOutputDirectory];
    
    // Set up our context
    self.contextManager = [[ABYContextManager alloc] initWithContext:ctx
                                             compilerOutputDirectory:compilerOutputDirectory];
    [self.contextManager setupGlobalContext];
    [self.contextManager setUpConsoleLog];
    [self.contextManager setUpTimerFunctionality];
    [self.contextManager setUpAmblyImportScript];
    
    self.replServer = [[ABYServer alloc] initWithContext:self.contextManager.context
                                 compilerOutputDirectory:compilerOutputDirectory];
    BOOL successful = [self.replServer startListening];
    if (!successful) {
        NSLog(@"Failed to start REPL server.");
    } else {
        NSLog(@"Started REPL server.");
    }
	
	[window makeKeyAndVisible];
    return YES;
}

- (void)loadViewControllerWithScriptAtPath:(NSString *)path {
	// Release any previous ViewController
	window.rootViewController = nil;
	
	EJAppViewController *vc = [[EJAppViewController alloc] initWithScriptAtPath:path];
	window.rootViewController = vc;
	[vc release];
}

#pragma mark -
#pragma mark Ambly helper methods

- (NSURL *)privateDocumentsDirectory
{
    NSSearchPathDirectory directory;
    #ifdef TARGET_OS_TV
        directory = NSCachesDirectory;
    #else
        directory = NSLibraryDirectory;
    #endif
    NSURL *userDirectory = [[[NSFileManager defaultManager] URLsForDirectory:directory inDomains:NSUserDomainMask] lastObject];
    return [userDirectory URLByAppendingPathComponent:@"Private Documents"];
}

- (void)createDirectoriesUpTo:(NSURL*)directory
{
    if (![[NSFileManager defaultManager] fileExistsAtPath:[directory path]]) {
        NSError *error = nil;
        
        if (![[NSFileManager defaultManager] createDirectoryAtPath:[directory path]
                                       withIntermediateDirectories:YES
                                                        attributes:nil
                                                             error:&error]) {
            NSLog(@"Can't create directory %@ [%@]", [directory path], error);
            abort();
        }
    }
}


#pragma mark -
#pragma mark Memory management

- (void)dealloc {
	window.rootViewController = nil;
	[window release];
    [super dealloc];
}


@end
