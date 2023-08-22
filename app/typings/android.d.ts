/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module scottyab {
		export module rootbeer {
			export class BuildConfig {
				public static class: java.lang.Class<com.scottyab.rootbeer.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module scottyab {
		export module rootbeer {
			export class Const {
				public static class: java.lang.Class<com.scottyab.rootbeer.Const>;
				public static knownDangerousAppsPackages: androidNative.Array<string>;
				public static knownRootCloakingPackages: androidNative.Array<string>;
			}
		}
	}
}

declare module com {
	export module scottyab {
		export module rootbeer {
			export class RootBeer {
				public static class: java.lang.Class<com.scottyab.rootbeer.RootBeer>;
				public detectRootManagementApps(): boolean;
				public checkForRootNative(): boolean;
				public checkForNativeLibraryReadAccess(): boolean;
				public checkForDangerousProps(): boolean;
				public checkForRWPaths(): boolean;
				/** @deprecated */
				public isRootedWithoutBusyBoxCheck(): boolean;
				public detectRootCloakingApps(): boolean;
				public checkSuExists(): boolean;
				public isRooted(): boolean;
				public checkForBinary(param0: string): boolean;
				public detectTestKeys(): boolean;
				public setLogging(param0: boolean): void;
				public checkForSuBinary(): boolean;
				public detectPotentiallyDangerousApps(): boolean;
				public canLoadNativeLibrary(): boolean;
				public detectRootCloakingApps(param0: androidNative.Array<string>): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public detectPotentiallyDangerousApps(param0: androidNative.Array<string>): boolean;
				public isRootedWithBusyBoxCheck(): boolean;
				public detectRootManagementApps(param0: androidNative.Array<string>): boolean;
				public checkForBusyBoxBinary(): boolean;
				public checkForMagiskBinary(): boolean;
			}
		}
	}
}

declare module com {
	export module scottyab {
		export module rootbeer {
			export class RootBeerNative {
				public static class: java.lang.Class<com.scottyab.rootbeer.RootBeerNative>;
				public setLogDebugMessages(param0: boolean): number;
				public wasNativeLibraryLoaded(): boolean;
				public checkForRoot(param0: androidNative.Array<any>): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module scottyab {
		export module rootbeer {
			export module util {
				export class QLog {
					public static class: java.lang.Class<com.scottyab.rootbeer.util.QLog>;
					public static NONE: number;
					public static ERRORS_ONLY: number;
					public static ERRORS_WARNINGS: number;
					public static ERRORS_WARNINGS_INFO: number;
					public static ERRORS_WARNINGS_INFO_DEBUG: number;
					public static ALL: number;
					public static LOGGING_LEVEL: number;
					public static w(param0: any): void;
					public static w(param0: any, param1: java.lang.Throwable): void;
					public static v(param0: any): void;
					public static e(param0: java.lang.Exception): void;
					public static isILoggable(): boolean;
					public static isDLoggable(): boolean;
					public static e(param0: any): void;
					public static i(param0: any): void;
					public static isELoggable(): boolean;
					public static d(param0: any): void;
					public static e(param0: any, param1: java.lang.Throwable): void;
					public static isVLoggable(): boolean;
					public static isWLoggable(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module scottyab {
		export module rootbeer {
			export module util {
				export class Utils {
					public static class: java.lang.Class<com.scottyab.rootbeer.util.Utils>;
					public static isSelinuxFlagInEnabled(): boolean;
				}
			}
		}
	}
}

//Generics information:

