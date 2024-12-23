package com.workdev.example.ui.Screens.SecondScreen

import androidx.compose.runtime.Composable
import androidx.navigation.NavBackStackEntry
import androidx.navigation.NavHostController

@Composable
fun SecondScreen(navController: NavHostController, backStackEntry: NavBackStackEntry)
{
    val text = backStackEntry.arguments?.getString("text")
    BodyScreen(text!!,navController)



}