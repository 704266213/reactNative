package com.react.fragment;


import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.react.R;
import com.react.manager.ReactNativeManager;

public class HomePageFragment extends Fragment implements DefaultHardwareBackBtnHandler {

    private ReactRootView reactRootView;
    private ReactInstanceManager mReactInstanceManager;

    public static HomePageFragment newInstance() {
        HomePageFragment fragment = new HomePageFragment();
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_home_page, container, false);
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        reactRootView = (ReactRootView) view.findViewById(R.id.reactRootView);
        mReactInstanceManager = ReactNativeManager.getInstance();
        reactRootView.startReactApplication(mReactInstanceManager, "homePageFragment", null);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {

        }
    }
}
