# --------------------------------------------------- #
# -----     4th FramerMeetupMAD - Practice     ------ #
# -------------------     by     -------------------- #
# -------------     @david_torrijos     ------------- #
# --------------------------------------------------- #


# ----- Toggle Animation ----- #
# States
ToggleSelect.states =
	disable:
		x: 1
	animationOptions:
		time: .75
		curve: Spring (damping: 0.7)
ToggleBackground.states =
	disable:
		scale: 0
		opacity: 0
	animationOptions:
		time: .75
		curve: Spring (damping: 0.6)

# Events
ToggleSelect.onTap (event, layer) ->
	ToggleSelect.stateCycle()
	ToggleBackground.stateCycle()
# ---------------------------- #


# ----- Screen Flow ----- #
# Set up FlowComponent
flow = new FlowComponent
	backgroundColor: "rgba(255,255,255,1)"
flow.showNext(loginScreen)

# NavBar initial configuration
flow.header = navBar
navBar.opacity = 0
currentScreen = 0

# Events
signUpButton.onTap ->
	flow.showNext(homeScreen)
	navBar.animate
		opacity: 1
		options:
			time: .75
			delay: .25
	currentScreen++
Event04.onTap ->
	flow.showNext(detailScreen)
	currentScreen++
back.onTap ->
	if currentScreen == 1
		navBar.animate
			opacity: 0
			options:
				time: .5
				delay: 0
		Utils.delay .25, ->
			flow.showPrevious(loginScreen)
	else
		flow.showPrevious(homeScreen)
	currentScreen--
# ----------------------- #


# ----- Scroll Component ----- #
scroll = new ScrollComponent
	size: Screen.size
	scrollHorizontal: false
scroll.parent = homeScreen

# Content
PageTitle.parent = scroll.content
PageTitle.y = 32

EventList.parent = scroll.content
EventList.y = 129
# ---------------------------- #