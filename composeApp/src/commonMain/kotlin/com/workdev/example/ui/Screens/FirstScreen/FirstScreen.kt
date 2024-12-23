package com.workdev.example.ui.Screens.FirstScreen

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController


@Composable
fun FirstScreen(navController: NavHostController) {



    BodyScreen("Hello First Screen !","Click here",navController)
}


