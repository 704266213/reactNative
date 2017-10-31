package com.react.activity;


import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.ImageView;

import com.react.R;
import com.react.fragment.BookCaseFragment;
import com.react.fragment.DailyFragment;
import com.react.fragment.HomePageFragment;
import com.react.fragment.MeFragment;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {


    private FragmentManager fragmentManager;
    private List<Fragment> fragments;
    private List<ImageView> imageViews;
    private int currentPositon = 0;


    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_activity);

        initView();
    }

    private void initView() {
        fragments = new ArrayList<>();
        imageViews = new ArrayList<>();

        ImageView homePage = (ImageView) findViewById(R.id.homePage);
        imageViews.add(homePage);
        HomePageFragment homePageFragment = HomePageFragment.newInstance();
        fragments.add(homePageFragment);

        ImageView daily = (ImageView) findViewById(R.id.daily);
        imageViews.add(daily);
        DailyFragment dailyFragment = DailyFragment.newInstance();
        fragments.add(dailyFragment);

        ImageView bookCase = (ImageView) findViewById(R.id.bookCase);
        imageViews.add(bookCase);
        BookCaseFragment bookCaseFragment = BookCaseFragment.newInstance();
        fragments.add(bookCaseFragment);

        ImageView me = (ImageView) findViewById(R.id.me);
        imageViews.add(me);
        MeFragment meFragment = MeFragment.newInstance();
        fragments.add(meFragment);

        fragmentManager = getSupportFragmentManager();


        int size = fragments.size();
        FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
        for(int i = 0 ;  i < size ; i++){
            Fragment fragment = fragments.get(i);
            ImageView imageView = imageViews.get(i);
            fragmentTransaction.add(R.id.container, fragment);
            if (i == 0){
                fragmentTransaction.show(fragment);
                imageView.setSelected(true);
            } else {
                fragmentTransaction.hide(fragment);
            }
            imageView.setOnClickListener(new OnTabClickListener(i));
        }
        fragmentTransaction.commit();

    }

    public class OnTabClickListener implements View.OnClickListener {

        private int position;

        public OnTabClickListener(int position) {
            this.position = position;
        }

        @Override
        public void onClick(View v) {
            if (currentPositon != position) {
                imageViews.get(currentPositon).setSelected(false);
                imageViews.get(position).setSelected(true);
                switchFragment(position);
            }
        }
    }

    private void switchFragment(int position) {
        FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
        fragmentTransaction.hide(fragments.get(currentPositon));
        fragmentTransaction.show(fragments.get(position)).commit();
        this.currentPositon = position;
    }


}
