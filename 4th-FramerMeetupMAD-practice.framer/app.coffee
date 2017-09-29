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
flow.header = navBar

# Switch on click
signUpButton.onTap ->
	flow.showNext(homeScreen)
	navBar.animate
		y: 0
		opacity: 1
		options:
			time: .75
			curve: Spring(damping: 0.9)
			delay: .25
back.onTap ->
	navBar.animate
		y: -67
		opacity: 0
		options:
			time: .75
			curve: Spring(damping: 0.9)
			delay: 0
	Utils.delay .25, ->
		flow.showPrevious(loginScreen)
# ----------------------- #