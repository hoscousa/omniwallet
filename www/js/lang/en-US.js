angular.module("omniConfig")
	.constant("EnglishTranslation",{
   	COMMON_ACTIONS: 'Actions',
	COMMON_ADDRESS: 'Address',
	COMMON_AVAILABLE: 'available',
	COMMON_BALANCE: 'Balance',
	COMMON_BITCOIN: 'Bitcoin',
   	COMMON_BROADCAST: 'Broadcast Transaction',
   	COMMON_OVERVIEW: 'Overview',
   	COMMON_REMOVEADDRESS: 'Remove from Wallet',
	COMMON_ADDRESSES: 'Addresses',
	COMMON_ASSETS: 'Assets',
	COMMON_ASSET: 'Asset',
	COMMON_OVERVIEW: 'Overview',
   	COMMON_SEND: 'Send',
   	COMMON_VALUE: 'Value',
	COMMON_CREATEWALLET: 'Create Wallet',
	COMMON_LOGIN: 'Login',
	COMMON_LOADING:'Loading',
	COMMON_BACK:'Go back',
	COMMON_NAME:'Name',
	COMMON_SELECT:'Select',
	COMMON_YES:'Yes',
	COMMON_NO:'No',
	COMMON_CANCEL:'Cancel',
	COMMON_NEXT:'Next',
	HOMEPAGE_ADDRESSEXAMPLE: '(e.g. 1EXoDusjGwvnjZUyKkxZ4UHEf77z6A5S4P)',
   	HOMEPAGE_BALANCECHECK:'Balance Check',
   	HOMEPAGE_CHECKBALANCE: 'Check Balance',
	HOMEPAGE_ENTERVALIDADDRESS:'Enter a valid Bitcoin Address ',
	HOMEPAGE_WELCOME: 'Welcome to Omniwallet',
	NAVIGATION_ABOUT:'About',
	NAVIGATION_ABOUTOMNI:'About Omniwallet',
	NAVIGATION_ABOUTMSC:'About Mastercoin',
	NAVIGATION_ACCOUNT:'My Account',
	NAVIGATION_ADDRESSES: 'My Addresses',
	NAVIGATION_ASSETS: 'My Assets',
	COMMON_ACTIVECROWDSALES:'Active Crowdsales',
	NAVIGATION_CREATE: 'Create Wallet',
	NAVIGATION_CONTACT:'Contact Us',
	NAVIGATION_EXCHANGE: 'Exchange',
	NAVIGATION_EXPLORER:'Explorer',
	NAVIGATION_EXPLOREASSETS:'Assets',
	NAVIGATION_FAQ:'FAQ',
	COMMON_HISTORY: 'History',
	NAVIGATION_LOGIN: 'Login',
	NAVIGATION_LOGOUT:'Logout',
	NAVIGATION_OFFERS:'My Offers',
	NAVIGATION_SETTINGS:'Account Settings',
	NAVIGATION_TRADE:'Trade',
	NAVIGATION_TRANSACTIONS:'Transactions',
	NAVIGATION_WALLET: 'My Wallet',
	TX_TYPE_0: 'Simple Send',
	TX_TYPE_3: 'Send To Owners',
	TX_TYPE_20: 'Sell Offer',
	TX_TYPE_21: 'DEx Phase 2',
	TX_TYPE_22: 'Accept Offer',
	'TX_TYPE_-22': 'Purchase Offer',
	TX_TYPE_50: 'Create a Fixed Property',
	TX_TYPE_51: 'Create a Crowdsale',
	'TX_TYPE_-51' : 'Crowdsale Participation',
	TX_TYPE_52: 'Promote a Property',
	TX_TYPE_53: 'Close a Crowdsale Manually',
	TX_TYPE_54: 'Create a Managed Property',
	TX_TYPE_55: 'Grant Property Tokens',
	TX_TYPE_56: 'Revoke Property Tokens',
	TX_TYPE_70: 'Change Property Issuer on Record',
	TX_DETAILS_0_SENDER: 'You sent {{amount | toWhole:divisible }} {{coin}}',
	TX_DETAILS_0_RECIPIENT: 'You recieved {{amount | toWhole:divisible }} {{coin}}',
	TX_DETAILS_3_PAYER: 'You sent {{amount | toWhole:divisible }} {{coin}}',
	TX_DETAILS_3_PAYEE: 'You got payed {{amount | toWhole:divisible }} {{coin}}',
	TX_DETAILS_3_FEEPAYER: 'You paid {{amount | toWhole:divisible }} {{coin}} in fees',
	TX_DETAILS_20_SELLER: 'You put {{amount | toWhole:divisible }} {{coin}} for sale',
	TX_DETAILS_22_BUYER: 'You reserved {{amount | toWhole:divisible }} {{coin}}',
	TX_DETAILS_22_SELLER: '{{amount | toWhole:divisible }} {{coin}} reserved from buyer',
	'TX_DETAILS_-22_BUYER': 'You bought {{amount | toWhole:divisible }} {{coin}}',
	'TX_DETAILS_-22_SELLER': 'you sold {{amount | toWhole:divisible }} {{coin}}',
	TX_DETAILS_50_ISSUER: 'You created {{coin}} with an amount of {{amount | toWhole:divisible }}',
	TX_DETAILS_51_ISSUER: 'You started {{coin}} Crowdsale',
	'TX_DETAILS_-51_ISSUER': 'You got {{amount | toWhole:divisible }} {{coin}}',
	'TX_DETAILS_-51_PARTICIPANT': 'You got {{amount | toWhole:divisible }} {{coin}}',
	'TX_DETAILS_-51_SENDER': 'You participated with {{amount | toWhole:divisible }} {{coin}}',
	'TX_DETAILS_-51_RECIPIENT': 'You recieved {{amount | toWhole:divisible }} {{coin}}',
	TX_DETAILS_54_ISSUER: 'You created {{coin}} managed property',
	TX_DETAILS_55_ISSUER: 'You granted {{amount | toWhole:divisible }} {{coin}}',
	TX_DETAILS_55_RECIPIENT: 'You where granted {{amount | toWhole:divisible }} {{coin}}',
	TX_DETAILS_56_ISSUER: 'You revoked {{coin}}',
	TX_DETAILS_70_ISSUER: '{{coin}} ownership transfered',
	WALLET_OVERVIEW_BACKUP:'Backup',
	WALLET_OVERVIEW_ESTIMATED:'Estimated Total value',
	WALLET_OVERVIEW_IMPORT:'Import',
	WALLET_OVERVIEW_TITLE:'Overview',
	WALLET_OVERVIEW_OPTIONS:'Wallet Options',
	WALLET_OVERVIEW_OPTIONSTOGGLE:'Toggle Options',
	WALLET_OVERVIEW_PORTFOLIO:'Portfolio Composition by value',
	WALLET_OVERVIEW_WALLETID:'Wallet ID',
	WALLET_ADDRESSES_CREATE:'Create New Address',
	WALLET_ADDRESSES_IMPORT:'Import Address With Private Key',
	WALLET_ADDRESSES_TITLE:'My Addresses',
	WALLET_ADDRESSES_VIEW:'View by',
	WALLET_ADDRESSES_OPTIONS:'Add Address',
	WALLET_ADDRESSES_WATCH:'Add Watch Only Address',
	WALLET_ADDRESSES_OFFLINE:'Add Armory Offline Address',
	WALLET_SEND_TITLE:'Send',
	WALLET_SEND_CHOOSECOIN:'Choose coin',
	WALLET_SEND_FROM:'From address',
	WALLET_SEND_AMOUNT:'amount',
	WALLET_SEND_TO:'To address',
	WALLET_SEND_COST:'Total transaction cost',
	WALLET_SEND_FUNDS:'Send Funds',
	WALLET_SEND_TOKEN:'Token',
	WALLET_SEND_MODAL_AMOUNT:'Amount',
	WALLET_SEND_MODAL_FROM:'From',
	WALLET_SEND_MODAL_TO:'To',
	WALLET_SEND_CONFIRM:'Confirm Send',
	WALLET_ASSETS_ASSETS: 'Assets',
	WALLET_ASSETS_CREATE: 'Create',
	WALLET_ASSETS_CROWDSALE: 'Crowdsale',
	WALLET_ASSETS_MYASSETS: 'My Assets',
	WALLET_ASSETS_SMARTPROPERTY: 'Smart Property',
	WALLET_HISTORY_ALLADDRESSES: '-- All Addresses --',
	WALLET_HISTORY_FILTERLABEL:'Full Wallet History for',
	WALLET_HISTORY_TITLE:'History',
	WALLET_HISTORY_CURRENCY:'Currency',
	WALLET_HISTORY_TYPE:'Type',
	WALLET_HISTORY_AMOUNT:'Amount',
	WALLET_HISTORY_TXTIME:'Transaction time',
	WALLET_HISTORY_TXDETAILS:'Transaction details',
	WALLET_HISTORY_MOREDETAILS: 'See transaction details',
	ASSET_ISSUANCE_TITLE:'Create Smart Property',
	ASSET_ISSUANCE_SUBTITLE:'Issuance Details',
	ASSET_ISSUANCE_AMOUNT:'Number of Tokens',
	ASSET_ISSUANCE_AMOUNT_HINT:'Enter desired amount',
	ASSET_ISSUANCE_TYPE:'Issuance type',
	ASSET_ISSUANCE_FIXED:'Fixed',
	ASSET_ISSUANCE_MANAGED:'Managed',
	ASSET_ISSUANCE_CREATE:'Create Property',
	ASSET_ISSUANCE_MODALTITLE:'Confirm Property Creation',
	ASSET_FORM_ISSUER:'Issuance Address',
	COMMON_FEES:'Miner Fees (BTC)',
	ASSET_FORM_DETAILS_SUBTITLE:'Smart Property details',
	ASSET_FORM_DETAILS_DIVISIBLE:'Divisible',
	ASSET_FORM_DETAILS_CATEGORY:'Category',
	ASSET_FORM_DETAILS_SUBCATEGORY:'Subcategory',
	ASSET_FORM_DETAILS_URL:'Property URL',
	ASSET_FORM_DETAILS_URL_HINT:'Enter a url for more info on the Smart Property',
	ASSET_FORM_DETAILS_DESCRIPTION:'Smart Property Description',
	ASSET_FORM_DETAILS_DESCRIPTION_HINT:'characters left',
	ASSET_FORM_DETAILS_NAME_HINT:'ex. Bobcoin',
	ASSET_CROWDSALE_TITLE:'Start a Crowdsale',
	ASSET_CROWDSALE_SUBTITLE:'Crowdsale details',
	ASSET_CROWDSALE_DEADLINE:'Deadline',
	ASSET_CROWDSALE_FORISSUER:'Percentage for issuer',
	ASSET_CROWDSALE_FORISSUER_TOOLTIP:'Additional percentage created and credited to the issuing address based on the amount created and credited for each investment. Ex: With Percentage to issuer = 10, an investment that credits 100 tokens to an investment will also credit 10 tokens to the issuer.',
	ASSET_CROWDSALE_UTC:'UTC',
	ASSET_CROWDSALE_EARLYBONUS:'Weekly early bird bonus percentage',
	ASSET_CROWDSALE_EARLYBONUS_TOOLTIP:'Bonus percentage created and credited to each investor for each week (7 days) before the deadline (calculated to the second). Ex: With Weekly early bird bonus percentage = 10, a participant investing 14 days before the deadline will get approx 20% bonus. An investor investing with 10 days left will get approx 14% bonus.',
	ASSET_CROWDSALE_EARLYESTIMATE:'Estimated initial early bird bonus',
	ASSET_CROWDSALE_EARLYESTIMATE_TOOLTIP:'Estimate based on the crowdsale creation being confirmed in the blockchain within 30 minutes after it was calculated.',
	ASSET_CROWDSALE_PER:'per',
	ASSET_CROWDSALE_INVESTED:'invested',
	ASSET_CROWDSALE_ADDCURRENCY:'+ Add investment currency',
	ASSET_CROWDSALE_TOKENRATE:'# of tokens',
	ASSET_CROWDSALE_RATES:"Rates",
	ASSET_CROWDSALE_RATE:"Rate",
	ASSET_CROWDSALE_START:"Start Crowdsale",
	ASSET_CROWDSALE_MODALTITLE:"Confirm Crowdsale Creation",
	ASSET_CROWDSALE_INITIALEB:"Initial early bird bonus",
	ASSET_MODAL_DESCRIPTION:"Description",
	ASSET_CROWDSALE_ACCEPTEDCURRENCY:"Accepted currency",
	ASSETS_TABLE_ID:'Property ID',
	ASSETS_TABLE_NAME:'Property Name',
	ASSETS_TABLE_AMOUNT:'Total Amount',
	ASSETS_TABLE_URL:'Url',
	ASSET_HISTORY_TRANSACTIONS:'transactions',
	ASSET_HISTORY_LOADING:'Loading transactions',
	ASSET_HISTORY_FIXEDISSUANCE_TRUE : 'Property',
	ASSET_HISTORY_FIXEDISSUANCE_FALSE : 'Crowdsale',
	ASSET_HISTORY_TRANSACTION_CLOSED: 'Crowdsale was closed from further investments',
	ASSET_HISTORY_TRANSACTION_CREATE: 'was created',
	ASSET_HISTORY_TRANSACTION_CONFIRMATIONS: 'Confirmations',	
	TIMER_YEAR:'year',
	TIMER_MONTH:'month',
	TIMER_DAY:'day',
	TIMER_HOUR:'hour',
	TIMER_MINUTE:'minute',
	TIMER_SECOND:'second',
	TIMEAGO_NOW:'Just now',
	TIMEAGO_MINUTE:'minutes ago',
	TIMEAGO_HOUR:'hours ago',
	TIMEAGO_DAY:'days ago',
	TIMEAGO_WEEK:'weeks ago',
	TIMEAGO_MONTH:'months ago',
	TIMEAGO_YEAR:'years ago',
	CROWDSALE_DETAILS_YOUR :'Your',
	CROWDSALE_DETAILS_ACTIVE_TRUE:'Active Crowdsale',
	CROWDSALE_DETAILS_ACTIVE_FALSE:'Finished Crowdsale',
	CROWDSALE_DETAILS_TIME:'Time Until Closing',
	CROWDSALE_DETAILS_TOKENSBOUGHT:'Tokens already bought by participants',
	CROWDSALE_DETAILS_TOKENSISSUER:'Tokens created for the issuer',
	CROWDSALE_DETAILS_CURRENTBONUS:'Current early bird bonus',
	CROWDSALE_DETAILS_GETTOKENS:'Get some tokens!',
	CROWDSALE_DETAILS_PARTICIPATE:'Participate',
	CROWDSALE_PARTICIPATION_TITLE:'Participate on {{property.name}} Crowdsale',
	CROWDSALE_PARTICIPATION_DESIREDCOIN: "Token to send",
	CROWDSALE_PARTICIPATION_MODAL_ESTIMATE: 'Estimated amount of tokens',
	CROWDSALE_PARTICIPATION_ESTIMATE:'You will recieve {{sendAmount * property.tokensperunit  + (earlybird * (sendAmount * property.tokensperunit) / 100}} {{property.name}} if you participate at this level.',
	ASSET_DETAILS_URL:'For more details visit',
	ASSET_DETAILS_SHARE: 'Share this page',
	CROWDSALE_DETAILS_NOTOKENS : "You don't have the token accepted by this crowdsale",
	CROWDSALE_DETAILS_LOGIN:"You need to login or create a wallet to participate",
	CROWDSALE_REMAINING_DAYS:'Day',
	CROWDSALE_REMAINING_HOURS:'Hr',
	CROWDSALE_REMAINING_MINUTES:'Min',
	CROWDSALE_PARTICIPATE_TITLE: 'Confirm Prowdsale Participation',
	CROWDSALE_PARTICIPATE_CONFIRM: 'Participate',
	ECOSYSTEM: {
		LABEL:'Selected Ecosystem',
		PRODUCTION:'Production',
		TEST:'Test'
	},
	CROWDSALE_TABLE_BOUGHT:'Tokens Bought',
	CROWDSALE_TABLE_CREATED:'Tokens Created'
  })