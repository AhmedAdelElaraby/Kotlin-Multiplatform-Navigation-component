package com.workdev.example.ui.Navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.workdev.example.ui.Screens.FirstScreen.FirstScreen

import com.workdev.example.ui.Screens.SecondScreen.SecondScreen

@Composable
fun Navigation() {

    val navController = rememberNavController()

    NavHost(
        navController = navController,
        startDestination = StateScreens.StateFirstScreen.route
    ) {
        composable(StateScreens.StateFirstScreen.route) {
            FirstScreen(navController = navController)
        }

        composable(
            StateScreens.StateSecondScreen.route + "/{text}",
            arguments = listOf(
                navArgument("text") { type = NavType.StringType }
            )
        ) { backStackEntry ->

            SecondScreen(
                backStackEntry = backStackEntry,
                navController = navController
            )
        }

    }



}