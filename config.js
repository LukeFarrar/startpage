// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Luke',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '1a574cba6c46aef984b2efbe3061b147', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/#inbox',
		},
		{
			id: '3',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://www.twitch.tv/',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'pinterest',
			icon: 'pin',
			link: 'https://pinterest.com',
		},
		{
      			id: '6',
      			name: 'Github',
      			icon: 'github',
      			link: 'https://github.com/',
    		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	   firstlistsContainer: [
    	{
      		icon: 'music',
      		id: '1',
      		links: [
        		{
          		name: 'Still Here',
          		link: 'https://www.youtube.com/watch?v=q1T8tGb_A1M',
        		},
        		{	
          		name: 'Chill Lofi',
          		link: 'https://www.youtube.com/watch?v=sF80I-TQiW0',
        		},
        		{
          		name: 'Not Today, Maybe Later',
         		link: 'https://www.youtube.com/watch?v=3doeiD-8uLs',
        		},
        		{
          		name: 'The War is Won',
          		link: 'https://www.youtube.com/watch?v=rENr1sxQUo8',
        		},
      		],
    		},
    		{
      		icon: 'coffee',
      		id: '2',
      		links: [
        		{
          		name: 'Linkedin',
          		link: 'https://www.linkedin.com',
        		},
        		{
          		name: 'University',
          		link: 'https://vle.york.ac.uk/',
        		},
        		{
          		name: 'Trello',
          		link: 'https://www.trello.com',
        		},
        		{
          		name: 'Slack',
          		link: 'https://www.slack.com',
        		},
      		],
    		},
  		],
};
