package com.workdev.example.ui.Screens.SecondScreen

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.workdev.example.ui.Navigation.StateScreens


@Composable
fun BodyScreen(text:String,navController: NavHostController){

    TextScreen(text,navController)


}














@Composable
fun TextScreen(text:String,navController: NavHostController){

    Column (
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = text,
            style = TextStyle(color = Color.Black)
            , fontSize = 30.sp
        )


        Button(onClick = {  navController.popBackStack() }){

            Text(
                text = "Back",
                style = TextStyle(color = Color.Black),
                fontSize = 30.sp
            )

        }


    }
}

