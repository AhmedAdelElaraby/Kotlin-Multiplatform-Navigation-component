package com.workdev.example.ui.Screens.FirstScreen


 import androidx.compose.foundation.layout.Arrangement
 import androidx.compose.foundation.layout.Column
 import androidx.compose.foundation.layout.fillMaxSize
 import androidx.compose.material3.Button
 import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
 import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
 import androidx.compose.ui.draw.scale
 import androidx.compose.ui.graphics.Color
 import androidx.compose.ui.text.TextStyle
 import androidx.compose.ui.unit.sp
 import androidx.navigation.NavHostController
 import com.workdev.example.ui.Navigation.StateScreens
 import org.jetbrains.compose.ui.tooling.preview.Preview

@Composable
fun BodyScreen(Label: String,Labe_lbtn :String,navController: NavHostController){

    TextScreen(Label,Labe_lbtn,navController)

}






@Composable
fun TextScreen(Label :String , Labe_lbtn :String,navController: NavHostController){




    Column (
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center


    ) {
        Text(
            text = Label,
            style = TextStyle(color = Color.Black),
            fontSize = 30.sp
        )

        Button(onClick = {
                navController.navigate(StateScreens.StateSecondScreen.route + "/${"Hello Second Screen"}")
        }){

            Text(
                text = Labe_lbtn,
                style = TextStyle(color = Color.Black),
                fontSize = 30.sp
            )

        }
    }
}

