package com.react.activity;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.react.R;
import com.react.manager.ReactNativeManager;

public class AboutActivity extends AppCompatActivity {

    private ReactRootView reactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about);

        reactRootView = (ReactRootView) findViewById(R.id.reactRootView);
        mReactInstanceManager = ReactNativeManager.getInstance();
        reactRootView.startReactApplication(mReactInstanceManager, "app", null);


    }
}
