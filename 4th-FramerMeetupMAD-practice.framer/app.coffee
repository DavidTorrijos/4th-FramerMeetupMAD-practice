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
flow.showNext(loginScreen)

# NavBar initial configuration
flow.header = navBar
navBar.opacity = 0


# Events
signUpButton.onTap ->
	flow.showNext(homeScreen)
	navBar.animate
		opacity: 1
		options:
			time: .75
			delay: .25
back.onTap ->
	navBar.animate
		opacity: 0
		options:
			time: .5
			delay: 0
	Utils.delay .25, ->
		flow.showPrevious(loginScreen)
# ----------------------- #


# ----- Main container ----- #
# Layer initial configuration
mainContainer = new Layer
	width: 375
	height: 667
	backgroundColor: "rgba(255,255,255,0)"
mainContainer.parent = homeScreen
# -------------------------- #


# ----- Scroll Component ----- #
# Scroll initial configuration
scroll = new ScrollComponent
	width: 375
	height: 667
scroll.scrollHorizontal = false
scroll.parent = mainContainer


# ----- Content ----- #
# Page title
PageTitle.parent = scroll.content
# ------------------- #