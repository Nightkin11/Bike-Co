const LIST_TYPES = {
	GENERAL: 'general',
	SPORT: 'sport',
	NEW: 'new',
	IN_PROGRESS: 'in_progress',
	DONE: 'done',
	APPROVED: true,
	APPROVEDFALSE: false,
}

const LIST_TITLES = {
	[LIST_TYPES.GENERAL]: 'General bike',
	[LIST_TYPES.SPORT]: 'Sport bike',
	[LIST_TYPES.NEW]: 'New',
	[LIST_TYPES.IN_PROGRESS]: 'In progress',
	[LIST_TYPES.DONE]: 'Done',
	[LIST_TYPES.APPROVED]: 'Approved',
	[LIST_TYPES.APPROVEDFALSE]: 'Not Approved',
}

const LIST_COLORS = {
	[LIST_TYPES.NEW]: 'gray',
	[LIST_TYPES.IN_PROGRESS]: 'orange',
	[LIST_TYPES.DONE]: 'green',
	[LIST_TYPES.APPROVED]: 'green',
}

export { LIST_TYPES, LIST_TITLES, LIST_COLORS }
