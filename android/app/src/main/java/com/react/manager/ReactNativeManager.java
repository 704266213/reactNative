package com.react.manager;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;
import com.react.BuildConfig;
import com.react.MainApplication;
import com.react.reactPackage.ToastReactPackage;

/**
 * 项目名称：AwesomeProject
 * 类描述：
 * 创建人：admin
 * 创建时间：2017/8/21 15:18
 * 修改人：admin
 * 修改时间：2017/8/21 15:18
 * 修改备注：
 */

public class ReactNativeManager {

    private static class Holder {
        private static ReactInstanceManager sInstance = ReactInstanceManager.builder()
                .setApplication(MainApplication.getApplication())
                .setBundleAssetName("index")
                .setJSMainModulePath("index")
                // .setJSMainModuleName("react-native/index")
                .addPackage(new MainReactPackage())
                .addPackage(new ToastReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

    }

    private ReactNativeManager() {
    }

    public static ReactInstanceManager getInstance() {
        return Holder.sInstance;
    }
}
