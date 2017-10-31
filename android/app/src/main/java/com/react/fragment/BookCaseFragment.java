package com.react.fragment;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.react.R;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link BookCaseFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class BookCaseFragment extends Fragment {


    public BookCaseFragment() {
        // Required empty public constructor
    }


    public static BookCaseFragment newInstance() {
        BookCaseFragment fragment = new BookCaseFragment();
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_book_case, container, false);
    }

}
