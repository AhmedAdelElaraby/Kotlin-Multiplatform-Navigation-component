package com.workdev.example.ui.Navigation

sealed class StateScreens (val route: String) {
    object StateFirstScreen : StateScreens("FirstScreen")
    object StateSecondScreen : StateScreens("SecondScreen")

}