/*	-INFORMATION-
	Subject:	Species(Races)
	Effect:		This script adds the Species from UA22CO.
				This species is a transciption of the species found in UA22CO, transcribed by MasterJedi2014.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2024-03-21 (sheet v13.1.0)
*/

var iFileName = "UA2022CO Species [by MasterJedi2014] V2.js";
RequiredSheetVersion("13.1.0");

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2024/03/21",
};

SourceList["UA22CO"] = {
	name : "Unearthed Arcana 2022: Character Origins",
	abbreviation : "UA22CO",
	date : "2022/08/18",
	url : "https://media.dndbeyond.com/compendium-images/one-dnd/character-origins/CSWCVV0M4B6vX6E1/UA2022-CharacterOrigins.pdf",
};

// Human
RaceList["human ua22co"] = {
	regExpSearch : /^(?=.*human).*$/i,
	name : "Human (UA22CO)",
	plural : "Humans",
	source : [["UA22CO", 3], ["MJ:HB", 0]],
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	skillstxt : "Proficiency with one skill of my choice.",
	age : " reach adulthood in their late teens and live less than a century, about 80 years on average.",
	height : " range from 3' to over 6 feet tall (2'11\" + 5d8\")",
	weight : " typically weigh 155 lb (75 + 5d8 \xD7 1d4 lb)",
	heightMetric : " range from .91 to over 1.8 metres tall (89 + 9d10 cm)",
	weightMetric : " typically weigh around 74 kg (34 + 6d8 \xD7 4d4 / 10 kg)",
	trait : "Human:\n   Resourceful: I gain Heroic Advantage whenever I finish a Long Rest.\n\n   Skillful: I gain proficiency in one skill of my choice.\n\n   Versatile: I gain the Skilled Feat or another 1st Lvl Feat of my choice.",
	eval : function() { AddFeat("Skilled"); },
	removeeval : function() { RemoveFeat("Skilled"); }
};

// Dwarf
RaceList["dwarf ua22co"] = {
	regExpSearch : /^(?=.*dwarf).*$/i,
	name : "Dwarf (UA22CO)",
	source : [["UA22CO", 5], ["MJ:HB", 0]],
	plural : "Dwarves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	vision : [
		["Darkvision", 60],
		["Blindsight for 10 min as Bonus Action", 60],
	],
	dmgres : ["Poison"],
	toolProfs : [["Artisan's tools", 2]],
	age : " are considered young until they reach the age of 50. On average, they live about 350 years.",
	height : " range from 4' to 5' tall (3'8\" + 2d4\")",
	weight : " typically weigh 150 lb (115 + 2d4 \xD7 2d6 lb)",
	heightMetric : " range from 1.2 to 1.5 metres tall (110 + 5d4 cm)",
	weightMetric : " typically weigh around 70 kg (55 + 5d4 \xD7 4d6 / 10 kg)",
	trait : "Dwarf:\n   Dwarven Resilience: I have Resistance to Poison Damage and gain Advantage on saving throws I make to avoid or end the Poisoned Condition on myself.\n\n   Dwarven Toughness: Hit Point Maximum increases by 1 per character level.\n\n   Forge Wise: I gain Tool Proficiency with two of the following options of my choice: Jeweler’s Tools, Mason’s Tools, Smith’s Tools, or Tinker’s Tools.\n\n   Stonecunning: As a Bonus Action, I can gain Tremorsense out to 60 ft for 10 minutes. I can do so Proficiency Bonus number of times per Long Rest.",
	calcChanges : {
		hp : function (totalHD) {
			return [totalHD * 1, '\n + ' + totalHD + ' 1 from Dwarven Toughness (' + (totalHD * 1) + ')', true];
		},
	},
};

// Elves
RaceList["high elf ua22co"] = {
	regExpSearch : /^(?=.*high)(?=.*elf).*$/i,
	name : "High Elf (UA22CO)",
	sortname : "Elf, High (UA22CO)",
	source : [["UA22CO", 6], ["MJ:HB", 0]],
	plural : "Elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	vision : [
		["Darkvision", 60],
	],
	skills : ["Perception"],
	skillstxt : "Proficiency with Perception.",
	savetxt : {
		text : "Magic can't put me to sleep; Adv. on saves vs. Charmed",
	},
	age : " typically claim adulthood around the age of 100 and can live to be 750 years old.",
	height : " range from under 5' to over 6' tall (4'6\" + 2d10\")",
	weight : " typically weigh 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from 1.5 to over 1.8 metres tall (140 + 5d10 cm)",
	weightMetric : " typically weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	trait : "High Elf:\n   Elven Lineage: I am part of an elven lineage that grants me supernatural abilities:\nAt 1st level, I know the Prestidigitation cantrip, and can swap it out with another Wizard cantrip after a Long Rest.\nAt 3rd level, I become able to cast Detect Magic.\nAt 5th level, I become able to cast Misty Step.\n   I can cast these spells once without a spell slot. Intelligence, Wisdom, or Charisma is my spellcasting ability for the Spells I cast with this trait (choose the ability when I select the lineage).\n\n   Fey Ancestry: I have Advantage on saving throws I make to avoid or end the Charmed Condition on myself.\n\n   Keen Senses: I have Proficiency in the Perception Skill.\n\n   Trance: Elves don't need to sleep, and cannot be magically put to sleep, but meditate semiconsciously for 4 hours a day. After resting in this way, I gain the benefits of a Long Rest after 4 hours of meditation.",
};
AddRacialVariant("high elf ua22co", "int spellcasting", {
	regExpSearch : /^(?=.*int)(?=.*spellcasting).*$/i,
	name : "High Elf (UA22CO)",
	plural : "Elves",
	source : [["UA22CO", 6], ["MJ:HB", 0]],
	trait : "High Elf:\n   Elven Lineage: I am part of an elven lineage that grants me supernatural abilities:\nAt 1st level, I know the Prestidigitation cantrip, and can swap it out with another Wizard cantrip after a Long Rest.\nAt 3rd level, I become able to cast Detect Magic.\nAt 5th level, I become able to cast Misty Step.\n   I can cast these spells once without a spell slot. Intelligence is my spellcasting ability for the Spells I cast with this trait.\n\n   Fey Ancestry: I have Advantage on saving throws I make to avoid or end the Charmed Condition on myself.\n\n   Keen Senses: I have Proficiency in the Perception Skill.\n\n   Trance: Elves don't need to sleep, and cannot be magically put to sleep, but meditate semiconsciously for 4 hours a day. After resting in this way, I gain the benefits of a Long Rest after 4 hours of meditation.",
	spellcastingAbility : 4,
	features : {
		"prestidigitation" : {
			name : "Prestidigitation",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["prestidigitation"],
				selection : ["prestidigitation"],
				firstCol : 'atwill',
			},
		},
		"detect magic" : {
			name : "Detect Magic",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : 'oncelr',
			},
		},
		"misty step" : {
			name : "Misty Step",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["misty step"],
				selection : ["misty step"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("high elf ua22co", "wis spellcasting", {
	regExpSearch : /^(?=.*wis)(?=.*spellcasting).*$/i,
	name : "High Elf (UA22CO)",
	plural : "Elves",
	source : [["UA22CO", 6], ["MJ:HB", 0]],
	trait : "High Elf:\n   Elven Lineage: I am part of an elven lineage that grants me supernatural abilities:\nAt 1st level, I know the Prestidigitation cantrip, and can swap it out with another Wizard cantrip after a Long Rest.\nAt 3rd level, I become able to cast Detect Magic.\nAt 5th level, I become able to cast Misty Step.\n   I can cast these spells once without a spell slot. Wisdom is my spellcasting ability for the Spells I cast with this trait.\n\n   Fey Ancestry: I have Advantage on saving throws I make to avoid or end the Charmed Condition on myself.\n\n   Keen Senses: I have Proficiency in the Perception Skill.\n\n   Trance: Elves don't need to sleep, and cannot be magically put to sleep, but meditate semiconsciously for 4 hours a day. After resting in this way, I gain the benefits of a Long Rest after 4 hours of meditation.",
	spellcastingAbility : 5,
	features : {
		"prestidigitation" : {
			name : "Prestidigitation",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["prestidigitation"],
				selection : ["prestidigitation"],
				firstCol : 'atwill',
			},
		},
		"detect magic" : {
			name : "Detect Magic",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : 'oncelr',
			},
		},
		"misty step" : {
			name : "Misty Step",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["misty step"],
				selection : ["misty step"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("high elf ua22co", "cha spellcasting", {
	regExpSearch : /^(?=.*cha)(?=.*spellcasting).*$/i,
	name : "High Elf (UA22CO)",
	plural : "Elves",
	source : [["UA22CO", 6], ["MJ:HB", 0]],
	trait : "High Elf:\n   Elven Lineage: I am part of an elven lineage that grants me supernatural abilities:\nAt 1st level, I know the Prestidigitation cantrip, and can swap it out with another Wizard cantrip after a Long Rest.\nAt 3rd level, I become able to cast Detect Magic.\nAt 5th level, I become able to cast Misty Step.\n   I can cast these spells once without a spell slot. Charisma is my spellcasting ability for the Spells I cast with this trait.\n\n   Fey Ancestry: I have Advantage on saving throws I make to avoid or end the Charmed Condition on myself.\n\n   Keen Senses: I have Proficiency in the Perception Skill.\n\n   Trance: Elves don't need to sleep, and cannot be magically put to sleep, but meditate semiconsciously for 4 hours a day. After resting in this way, I gain the benefits of a Long Rest after 4 hours of meditation.",
	spellcastingAbility : 6,
	features : {
		"prestidigitation" : {
			name : "Prestidigitation",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["prestidigitation"],
				selection : ["prestidigitation"],
				firstCol : 'atwill',
			},
		},
		"detect magic" : {
			name : "Detect Magic",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : 'oncelr',
			},
		},
		"misty step" : {
			name : "Misty Step",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["misty step"],
				selection : ["misty step"],
				firstCol : 'oncelr',
			},
		},
	},
});

RaceList["drow ua22co"] = {
	regExpSearch : /^(?=.*drow)(?=.*elf).*$/i,
	name : "Drow (UA22CO)",
	sortname : "Elf, Dark (Drow) (UA22CO)",
	source : [["UA22CO", 6], ["MJ:HB", 0]],
	plural : "Drow",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	vision : [
		["Darkvision", 120],
	],
	skills : ["Perception"],
	skillstxt : "Proficiency with Perception.",
	savetxt : {
		text : "Magic can't put me to sleep; Adv. on saves vs. Charmed",
	},
	age : " typically claim adulthood around the age of 100 and can live to be 750 years old.",
	height : " range from under 5' to over 6' tall (4'6\" + 2d10\")",
	weight : " typically weigh 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from 1.5 to over 1.8 metres tall (140 + 5d10 cm)",
	weightMetric : " typically weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	trait : "Drow:\n   Elven Lineage: I am part of an elven lineage that grants me supernatural abilities:\nAt 1st level, I know the Dancing Lights cantrip.\nAt 3rd level, I become able to cast Faerie Fire.\nAt 5th level, I become able to cast Darkness.\n   I can cast these spells once without a spell slot. Intelligence, Wisdom, or Charisma is my spellcasting ability for the Spells I cast with this trait (choose the ability when I select the lineage).\n\n   Fey Ancestry: I have Advantage on saving throws I make to avoid or end the Charmed Condition on myself.\n\n   Keen Senses: I have Proficiency in the Perception Skill.\n\n   Trance: Elves don't need to sleep, and cannot be magically put to sleep, but meditate semiconsciously for 4 hours a day. After resting in this way, I gain the benefits of a Long Rest after 4 hours of meditation.",
};
AddRacialVariant("drow ua22co", "int spellcasting", {
	regExpSearch : /^(?=.*int)(?=.*spellcasting).*$/i,
	name : "Drow (UA22CO)",
	plural : "Drow",
	source : [["UA22CO", 6], ["MJ:HB", 0]],
	trait : "Drow:\n   Elven Lineage: I am part of an elven lineage that grants me supernatural abilities:\nAt 1st level, I know the Dancing Lights cantrip.\nAt 3rd level, I become able to cast Faerie Fire.\nAt 5th level, I become able to cast Darkness.\n   I can cast these spells once without a spell slot. Intelligence is my spellcasting ability for the Spells I cast with this trait.\n\n   Fey Ancestry: I have Advantage on saving throws I make to avoid or end the Charmed Condition on myself.\n\n   Keen Senses: I have Proficiency in the Perception Skill.\n\n   Trance: Elves don't need to sleep, and cannot be magically put to sleep, but meditate semiconsciously for 4 hours a day. After resting in this way, I gain the benefits of a Long Rest after 4 hours of meditation.",
	spellcastingAbility : 4,
	features : {
		"dancing lights" : {
			name : "Dancing Lights",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["dancing lights"],
				selection : ["dancing lights"],
				firstCol : 'atwill',
			},
		},
		"faerie fire" : {
			name : "Faerie Fire",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				firstCol : 'oncelr',
			},
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["darkness"],
				selection : ["darkness"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("drow ua22co", "wis spellcasting", {
	regExpSearch : /^(?=.*wis)(?=.*spellcasting).*$/i,
	name : "Drow (UA22CO)",
	plural : "Drow",
	source : [["UA22CO", 6], ["MJ:HB", 0]],
	trait : "Drow:\n   Elven Lineage: I am part of an elven lineage that grants me supernatural abilities:\nAt 1st level, I know the Dancing Lights cantrip.\nAt 3rd level, I become able to cast Faerie Fire.\nAt 5th level, I become able to cast Darkness.\n   I can cast these spells once without a spell slot. Wisdom is my spellcasting ability for the Spells I cast with this trait.\n\n   Fey Ancestry: I have Advantage on saving throws I make to avoid or end the Charmed Condition on myself.\n\n   Keen Senses: I have Proficiency in the Perception Skill.\n\n   Trance: Elves don't need to sleep, and cannot be magically put to sleep, but meditate semiconsciously for 4 hours a day. After resting in this way, I gain the benefits of a Long Rest after 4 hours of meditation.",
	spellcastingAbility : 5,
	features : {
		"dancing lights" : {
			name : "Dancing Lights",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["dancing lights"],
				selection : ["dancing lights"],
				firstCol : 'atwill',
			},
		},
		"faerie fire" : {
			name : "Faerie Fire",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				firstCol : 'oncelr',
			},
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["darkness"],
				selection : ["darkness"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("drow ua22co", "cha spellcasting", {
	regExpSearch : /^(?=.*cha)(?=.*spellcasting).*$/i,
	name : "Drow (UA22CO)",
	plural : "Drow",
	source : [["UA22CO", 6], ["MJ:HB", 0]],
	trait : "Drow:\n   Elven Lineage: I am part of an elven lineage that grants me supernatural abilities:\nAt 1st level, I know the Dancing Lights cantrip.\nAt 3rd level, I become able to cast Faerie Fire.\nAt 5th level, I become able to cast Darkness.\n   I can cast these spells once without a spell slot. Charisma is my spellcasting ability for the Spells I cast with this trait.\n\n   Fey Ancestry: I have Advantage on saving throws I make to avoid or end the Charmed Condition on myself.\n\n   Keen Senses: I have Proficiency in the Perception Skill.\n\n   Trance: Elves don't need to sleep, and cannot be magically put to sleep, but meditate semiconsciously for 4 hours a day. After resting in this way, I gain the benefits of a Long Rest after 4 hours of meditation.",
	spellcastingAbility : 6,
	features : {
		"dancing lights" : {
			name : "Dancing Lights",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["dancing lights"],
				selection : ["dancing lights"],
				firstCol : 'atwill',
			},
		},
		"faerie fire" : {
			name : "Faerie Fire",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				firstCol : 'oncelr',
			},
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["darkness"],
				selection : ["darkness"],
				firstCol : 'oncelr',
			},
		},
	},
});

RaceList["wood elf ua22co"] = {
	regExpSearch : /^(?=.*wood)(?=.*elf).*$/i,
	name : "Wood Elf (UA22CO)",
	sortname : "Elf, Wood (UA22CO)",
	source : [["UA22CO", 6], ["MJ:HB", 0]],
	plural : "Elves",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 },
	},
	languageProfs : ["Common"],
	vision : [
		["Darkvision", 60],
	],
	skills : ["Perception"],
	skillstxt : "Proficiency with Perception.",
	savetxt : {
		text : "Magic can't put me to sleep; Adv. on saves vs. Charmed",
	},
	age : " typically claim adulthood around the age of 100 and can live to be 750 years old.",
	height : " range from under 5' to over 6' tall (4'6\" + 2d10\")",
	weight : " typically weigh 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from 1.5 to over 1.8 metres tall (140 + 5d10 cm)",
	weightMetric : " typically weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	trait : "Wood Elf:\n   Elven Lineage: I am part of an elven lineage that grants me supernatural abilities:\nAt 1st level, I know the Druidcraft cantrip, and my Speed increases to 35 ft.\nAt 3rd level, I become able to cast Longstrider.\nAt 5th level, I become able to cast Pass without Trace.\n   I can cast these spells once without a spell slot. Intelligence, Wisdom, or Charisma is my spellcasting ability for the Spells I cast with this trait (choose the ability when I select the lineage).\n\n   Fey Ancestry: I have Advantage on saving throws I make to avoid or end the Charmed Condition on myself.\n\n   Keen Senses: I have Proficiency in the Perception Skill.\n\n   Trance: Elves don't need to sleep, and cannot be magically put to sleep, but meditate semiconsciously for 4 hours a day. After resting in this way, I gain the benefits of a Long Rest after 4 hours of meditation.",
};
AddRacialVariant("wood elf ua22co", "int spellcasting", {
	regExpSearch : /^(?=.*int)(?=.*spellcasting).*$/i,
	name : "Wood Elf (UA22CO)",
	plural : "Elves",
	source : [["UA22CO", 6], ["MJ:HB", 0]],
	trait : "Wood Elf:\n   Elven Lineage: I am part of an elven lineage that grants me supernatural abilities:\nAt 1st level, I know the Druidcraft cantrip, and my Speed increases to 35 ft.\nAt 3rd level, I become able to cast Longstrider.\nAt 5th level, I become able to cast Pass without Trace.\n   I can cast these spells once without a spell slot. Intelligence is my spellcasting ability for the Spells I cast with this trait.\n\n   Fey Ancestry: I have Advantage on saving throws I make to avoid or end the Charmed Condition on myself.\n\n   Keen Senses: I have Proficiency in the Perception Skill.\n\n   Trance: Elves don't need to sleep, and cannot be magically put to sleep, but meditate semiconsciously for 4 hours a day. After resting in this way, I gain the benefits of a Long Rest after 4 hours of meditation.",
	spellcastingAbility : 4,
	features : {
		"druidcraft" : {
			name : "Druidcraft",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["druidcraft"],
				selection : ["druidcraft"],
				firstCol : 'atwill',
			},
		},
		"longstrider" : {
			name : "Longstrider",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["longstrider"],
				selection : ["longstrider"],
				firstCol : 'oncelr',
			},
		},
		"pass without trace" : {
			name : "Pass without Trace",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["pass without trace"],
				selection : ["pass without trace"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("wood elf ua22co", "wis spellcasting", {
	regExpSearch : /^(?=.*wis)(?=.*spellcasting).*$/i,
	name : "Wood Elf (UA22CO)",
	plural : "Elves",
	source : [["UA22CO", 6], ["MJ:HB", 0]],
	trait : "Wood Elf:\n   Elven Lineage: I am part of an elven lineage that grants me supernatural abilities:\nAt 1st level, I know the Druidcraft cantrip, and my Speed increases to 35 ft.\nAt 3rd level, I become able to cast Longstrider.\nAt 5th level, I become able to cast Pass without Trace.\n   I can cast these spells once without a spell slot. Wisdom is my spellcasting ability for the Spells I cast with this trait.\n\n   Fey Ancestry: I have Advantage on saving throws I make to avoid or end the Charmed Condition on myself.\n\n   Keen Senses: I have Proficiency in the Perception Skill.\n\n   Trance: Elves don't need to sleep, and cannot be magically put to sleep, but meditate semiconsciously for 4 hours a day. After resting in this way, I gain the benefits of a Long Rest after 4 hours of meditation.",
	spellcastingAbility : 5,
	features : {
		"druidcraft" : {
			name : "Druidcraft",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["druidcraft"],
				selection : ["druidcraft"],
				firstCol : 'atwill',
			},
		},
		"longstrider" : {
			name : "Longstrider",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["longstrider"],
				selection : ["longstrider"],
				firstCol : 'oncelr',
			},
		},
		"pass without trace" : {
			name : "Pass without Trace",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["pass without trace"],
				selection : ["pass without trace"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("wood elf ua22co", "cha spellcasting", {
	regExpSearch : /^(?=.*cha)(?=.*spellcasting).*$/i,
	name : "Wood Elf (UA22CO)",
	plural : "Elves",
	source : [["UA22CO", 6], ["MJ:HB", 0]],
	trait : "Wood Elf:\n   Elven Lineage: I am part of an elven lineage that grants me supernatural abilities:\nAt 1st level, I know the Druidcraft cantrip, and my Speed increases to 35 ft.\nAt 3rd level, I become able to cast Longstrider.\nAt 5th level, I become able to cast Pass without Trace.\n   I can cast these spells once without a spell slot. Charisma is my spellcasting ability for the Spells I cast with this trait.\n\n   Fey Ancestry: I have Advantage on saving throws I make to avoid or end the Charmed Condition on myself.\n\n   Keen Senses: I have Proficiency in the Perception Skill.\n\n   Trance: Elves don't need to sleep, and cannot be magically put to sleep, but meditate semiconsciously for 4 hours a day. After resting in this way, I gain the benefits of a Long Rest after 4 hours of meditation.",
	spellcastingAbility : 6,
	features : {
		"druidcraft" : {
			name : "Druidcraft",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["druidcraft"],
				selection : ["druidcraft"],
				firstCol : 'atwill',
			},
		},
		"longstrider" : {
			name : "Longstrider",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["longstrider"],
				selection : ["longstrider"],
				firstCol : 'oncelr',
			},
		},
		"pass without trace" : {
			name : "Pass without Trace",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["pass without trace"],
				selection : ["pass without trace"],
				firstCol : 'oncelr',
			},
		},
	},
});

// Gnomes
RaceList["forest gnome ua22co"] = {
	regExpSearch : /^(?=.*forest)(?=.*gnome).*$/i,
	name : "Forest Gnome (UA22CO)",
	sortname : "Gnome, Forest (UA22CO)",
	plural : "Gnomes",
	source : [["UA22CO", 7], ["MJ:HB", 0]],
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	vision : [["Darkvision", 60]],
	age : " start adult life around age 40, and can live about 425 years on average.",
	height : " range from about 3' to 4' tall (2'11\" + 2d4\")",
	weight : " typically weigh 40 lb (35 + 2d4 lb)",
	heightMetric : " range from .90 to 1.20 metres tall (90 + 5d4 cm)",
	weightMetric : " typically weigh around 18 kg (16 + 5d4 / 10 kg)",
	trait : "Forest Gnome:\n   Gnomish Cunning: I have Advantage on Intelligence, Wisdom, and Charisma saving throws.\n\n   Gnomish Lineage: I am part of a gnomish lineage that grants me supernatural abilities.\nI know the Minor Illusion cantrip & I can cast Speak with Animals.\n   I can cast these spells a Proficiency Bonus number of times per Long Rest without a spell slot. Intelligence, Wisdom, or Charisma is my spellcasting ability for the Spells I cast with this trait (choose the ability when I select the lineage).",
};
AddRacialVariant("forest gnome ua22co", "int spellcasting", {
	regExpSearch : /^(?=.*int)(?=.*spellcasting).*$/i,
	name : "Forest Gnome (UA22CO)",
	plural : "Gnomes",
	source : [["UA22CO", 7], ["MJ:HB", 0]],
	trait : "Forest Gnome:\n   Gnomish Cunning: I have Advantage on Intelligence, Wisdom, and Charisma saving throws.\n\n   Gnomish Lineage: I am part of a gnomish lineage that grants me supernatural abilities.\nI know the Minor Illusion cantrip & I can cast Speak with Animals.\n   I can cast these spells a Proficiency Bonus number of times per Long Rest without a spell slot. Intelligence is my spellcasting ability for the Spells I cast with this trait.",
	spellcastingAbility : 4,
	features : {
		"minor illusion" : {
			name : "Minor Illusion",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["minor illusion"],
				selection : ["minor illusion"],
				firstCol : 'atwill',
			},
		},
		"speak with animals" : {
			name : "Speak with Animals",
			limfeaname : "Speak with Animals",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["speak with animals"],
				selection : ["speak with animals"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("forest gnome ua22co", "wis spellcasting", {
	regExpSearch : /^(?=.*wis)(?=.*spellcasting).*$/i,
	name : "Forest Gnome (UA22CO)",
	plural : "Gnomes",
	source : [["UA22CO", 7], ["MJ:HB", 0]],
	trait : "Forest Gnome:\n   Gnomish Cunning: I have Advantage on Intelligence, Wisdom, and Charisma saving throws.\n\n   Gnomish Lineage: I am part of a gnomish lineage that grants me supernatural abilities.\nI know the Minor Illusion cantrip & I can cast Speak with Animals.\n   I can cast these spells a Proficiency Bonus number of times per Long Rest without a spell slot. Wisdom is my spellcasting ability for the Spells I cast with this trait.",
	spellcastingAbility : 5,
	features : {
		"minor illusion" : {
			name : "Minor Illusion",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["minor illusion"],
				selection : ["minor illusion"],
				firstCol : 'atwill',
			},
		},
		"speak with animals" : {
			name : "Speak with Animals",
			limfeaname : "Speak with Animals",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["speak with animals"],
				selection : ["speak with animals"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("forest gnome ua22co", "cha spellcasting", {
	regExpSearch : /^(?=.*cha)(?=.*spellcasting).*$/i,
	name : "Forest Gnome (UA22CO)",
	plural : "Gnomes",
	source : [["UA22CO", 7], ["MJ:HB", 0]],
	trait : "Forest Gnome:\n   Gnomish Cunning: I have Advantage on Intelligence, Wisdom, and Charisma saving throws.\n\n   Gnomish Lineage: I am part of a gnomish lineage that grants me supernatural abilities.\nI know the Minor Illusion cantrip & I can cast Speak with Animals.\n   I can cast these spells a Proficiency Bonus number of times per Long Rest without a spell slot. Charisma is my spellcasting ability for the Spells I cast with this trait.",
	spellcastingAbility : 6,
	features : {
		"minor illusion" : {
			name : "Minor Illusion",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["minor illusion"],
				selection : ["minor illusion"],
				firstCol : 'atwill',
			},
		},
		"speak with animals" : {
			name : "Speak with Animals",
			limfeaname : "Speak with Animals",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["speak with animals"],
				selection : ["speak with animals"],
				firstCol : 'oncelr',
			},
		},
	},
});

RaceList["rock gnome ua22co"] = {
	regExpSearch : /^(?=.*rock)(?=.*gnome).*$/i,
	name : "Rock Gnome (UA22CO)",
	sortname : "Gnome, Rock (UA22CO)",
	plural : "Gnomes",
	source : [["UA22CO", 7], ["MJ:HB", 0]],
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	vision : [["Darkvision", 60]],
	age : " start adult life around age 40, and can live about 425 years on average.",
	height : " range from about 3' to 4' tall (2'11\" + 2d4\")",
	weight : " typically weigh 40 lb (35 + 2d4 lb)",
	heightMetric : " range from .90 to 1.20 metres tall (90 + 5d4 cm)",
	weightMetric : " typically weigh around 18 kg (16 + 5d4 / 10 kg)",
	trait : "Rock Gnome:\n   Gnomish Cunning: I have Advantage on Intelligence, Wisdom, and Charisma saving throws.\n\n   Gnomish Lineage: I am part of a gnomish lineage that grants me supernatural abilities.\nI know the Mending & Prestidigitation cantrips. See the Notes page for more info on this Species Feature.\n   I can cast these spells a Proficiency Bonus number of times per Long Rest without a spell slot. Intelligence, Wisdom, or Charisma is my spellcasting ability for the Spells I cast with this trait (choose the ability when I select the lineage).",
	toNotesPage : [{
		name : "Rock Gnome Traits Continued:",
		note : "\n   Gnomish Lineage (Continued): I can can spend 10 minutes casting Prestidigitation to create a Tiny clockwork device (AC 5, 1 HP), such as a toy, a fire starter, or a music box. Casting the Spell in this way consumes 10 GP worth of raw material (string, gears, and the like), which I provide during the casting.\n   When I create the device, I determine its function by choosing one effect from Prestidigitation; the device produces that effect whenever I or another creature takes a Bonus Action to touch the device and activate it. If the chosen effect has options within it, I choose one of those options for the device when I create it. For example, if I choose the spell’s ignite-extinguish effect, I determine whether the device ignites or extinguishes fire; the device doesn’t do both.\n   I can have three such devices in existence at a time, and each one dismantles itself 8 hours after its creation. I can also touch one of my devices and dismantle it as an Action. After a device is dismantled, the 10 GP of materials used to create it can be reclaimed.",
		page3notes : true,
		popupName : "Species Traits Continued",
		source : [["MJ:HB", 0], ["UA22CO", 7]],
	}],
};
AddRacialVariant("rock gnome ua22co", "int spellcasting", {
	regExpSearch : /^(?=.*int)(?=.*spellcasting).*$/i,
	name : "Rock Gnome (UA22CO)",
	plural : "Gnomes",
	source : [["UA22CO", 7], ["MJ:HB", 0]],
	trait : "Rock Gnome:\n   Gnomish Cunning: I have Advantage on Intelligence, Wisdom, and Charisma saving throws.\n\n   Gnomish Lineage: I am part of a gnomish lineage that grants me supernatural abilities.\nI know the Mending & Prestidigitation cantrips. See the Notes page for more info on this Species Feature.\n   I can cast these spells a Proficiency Bonus number of times per Long Rest without a spell slot. Intelligence is my spellcasting ability for the Spells I cast with this trait.",
	toNotesPage : [{
		name : "Rock Gnome Traits Continued:",
		note : "\n   Gnomish Lineage (Continued): I can can spend 10 minutes casting Prestidigitation to create a Tiny clockwork device (AC 5, 1 HP), such as a toy, a fire starter, or a music box. Casting the Spell in this way consumes 10 GP worth of raw material (string, gears, and the like), which I provide during the casting.\n   When I create the device, I determine its function by choosing one effect from Prestidigitation; the device produces that effect whenever I or another creature takes a Bonus Action to touch the device and activate it. If the chosen effect has options within it, I choose one of those options for the device when I create it. For example, if I choose the spell’s ignite-extinguish effect, I determine whether the device ignites or extinguishes fire; the device doesn’t do both.\n   I can have three such devices in existence at a time, and each one dismantles itself 8 hours after its creation. I can also touch one of my devices and dismantle it as an Action. After a device is dismantled, the 10 GP of materials used to create it can be reclaimed.",
		page3notes : true,
		popupName : "Species Traits Continued",
		source : [["MJ:HB", 0], ["UA22CO", 7]],
	}],
	spellcastingAbility : 4,
	features : {
		"mending" : {
			name : "Mending",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["mending"],
				selection : ["mending"],
				firstCol : 'atwill',
			},
		},
		"prestidigitation" : {
			name : "Prestidigitation",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["prestidigitation"],
				selection : ["prestidigitation"],
				firstCol : 'atwill',
			},
		},
		"clockwork devices" : {
			name : "Clockwork Devices",
			minlevel : 1,
			usages : 3,
			recovery : "8hr",
		},
	},
});
AddRacialVariant("rock gnome ua22co", "wis spellcasting", {
	regExpSearch : /^(?=.*wis)(?=.*spellcasting).*$/i,
	name : "Rock Gnome (UA22CO)",
	plural : "Gnomes",
	source : [["UA22CO", 7], ["MJ:HB", 0]],
	trait : "Rock Gnome:\n   Gnomish Cunning: I have Advantage on Intelligence, Wisdom, and Charisma saving throws.\n\n   Gnomish Lineage: I am part of a gnomish lineage that grants me supernatural abilities.\nI know the Mending & Prestidigitation cantrips. See the Notes page for more info on this Species Feature.\n   I can cast these spells a Proficiency Bonus number of times per Long Rest without a spell slot. Wisdom is my spellcasting ability for the Spells I cast with this trait.",
	toNotesPage : [{
		name : "Rock Gnome Traits Continued:",
		note : "\n   Gnomish Lineage (Continued): I can can spend 10 minutes casting Prestidigitation to create a Tiny clockwork device (AC 5, 1 HP), such as a toy, a fire starter, or a music box. Casting the Spell in this way consumes 10 GP worth of raw material (string, gears, and the like), which I provide during the casting.\n   When I create the device, I determine its function by choosing one effect from Prestidigitation; the device produces that effect whenever I or another creature takes a Bonus Action to touch the device and activate it. If the chosen effect has options within it, I choose one of those options for the device when I create it. For example, if I choose the spell’s ignite-extinguish effect, I determine whether the device ignites or extinguishes fire; the device doesn’t do both.\n   I can have three such devices in existence at a time, and each one dismantles itself 8 hours after its creation. I can also touch one of my devices and dismantle it as an Action. After a device is dismantled, the 10 GP of materials used to create it can be reclaimed.",
		page3notes : true,
		popupName : "Species Traits Continued",
		source : [["MJ:HB", 0], ["UA22CO", 7]],
	}],
	spellcastingAbility : 5,
	features : {
		"mending" : {
			name : "Mending",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["mending"],
				selection : ["mending"],
				firstCol : 'atwill',
			},
		},
		"prestidigitation" : {
			name : "Prestidigitation",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["prestidigitation"],
				selection : ["prestidigitation"],
				firstCol : 'atwill',
			},
		},
		"clockwork devices" : {
			name : "Clockwork Devices",
			minlevel : 1,
			usages : 3,
			recovery : "8hr",
		},
	},
});
AddRacialVariant("rock gnome ua22co", "cha spellcasting", {
	regExpSearch : /^(?=.*cha)(?=.*spellcasting).*$/i,
	name : "Rock Gnome (UA22CO)",
	plural : "Gnomes",
	source : [["UA22CO", 7], ["MJ:HB", 0]],
	trait : "Rock Gnome:\n   Gnomish Cunning: I have Advantage on Intelligence, Wisdom, and Charisma saving throws.\n\n   Gnomish Lineage: I am part of a gnomish lineage that grants me supernatural abilities.\nI know the Mending & Prestidigitation cantrips. See the Notes page for more info on this Species Feature.\n   I can cast these spells a Proficiency Bonus number of times per Long Rest without a spell slot. Charisma is my spellcasting ability for the Spells I cast with this trait.",
	toNotesPage : [{
		name : "Rock Gnome Traits Continued:",
		note : "\n   Gnomish Lineage (Continued): I can can spend 10 minutes casting Prestidigitation to create a Tiny clockwork device (AC 5, 1 HP), such as a toy, a fire starter, or a music box. Casting the Spell in this way consumes 10 GP worth of raw material (string, gears, and the like), which I provide during the casting.\n   When I create the device, I determine its function by choosing one effect from Prestidigitation; the device produces that effect whenever I or another creature takes a Bonus Action to touch the device and activate it. If the chosen effect has options within it, I choose one of those options for the device when I create it. For example, if I choose the spell’s ignite-extinguish effect, I determine whether the device ignites or extinguishes fire; the device doesn’t do both.\n   I can have three such devices in existence at a time, and each one dismantles itself 8 hours after its creation. I can also touch one of my devices and dismantle it as an Action. After a device is dismantled, the 10 GP of materials used to create it can be reclaimed.",
		page3notes : true,
		popupName : "Species Traits Continued",
		source : [["MJ:HB", 0], ["UA22CO", 7]],
	}],
	spellcastingAbility : 6,
	features : {
		"mending" : {
			name : "Mending",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["mending"],
				selection : ["mending"],
				firstCol : 'atwill',
			},
		},
		"prestidigitation" : {
			name : "Prestidigitation",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["prestidigitation"],
				selection : ["prestidigitation"],
				firstCol : 'atwill',
			},
		},
		"clockwork devices" : {
			name : "Clockwork Devices",
			minlevel : 1,
			usages : 3,
			recovery : "8hr",
		},
	},
});

// Halfling
RaceList["halfling ua22co"] = {
	regExpSearch : /^(?=.*halfling).*$/i,
	name : "Halfling (UA22CO)",
	source : [["UA22CO", 8], ["MJ:HB", 0]],
	plural : "Halflings",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	skills : ["Stealth"],
	skillstxt : "Proficiency with Stealth.",
	savetxt : {
		text : "Adv. on saves vs. Frightened",
	},
	age : " reach adulthood at age 20, and can live about 150 years on average.",
	height : " are about 3' tall (2'7\" + 2d4\")",
	weight : " typically weigh 40 lb (35 + 2d4 lb)",
	heightMetric : " are about .90 metres tall (80 + 5d4 cm)",
	weightMetric : " typically weigh around 18 kg (16 + 5d4 / 10 kg)",
	trait : "Halfling:\n   Brave: I have Advantage on saving throws I make to avoid or end the Frightened Condition on myself.\n\n   Halfling Nimbleness: I can move through the space of any creature that is of a size larger than me, but I can’t stop there.\n\n   Luck: When I roll a 1 on any d20 Test, I can reroll the die and must use the new roll.\n\n   Naturally Stealthy: I have Proficiency in the Stealth Skill.",
};

// Orc
RaceList["orc ua22co"] = {
	regExpSearch : /^(?=.*orc).*$/i,
	name : "Orc (UA22CO)",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	plural : "Orcs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	vision : [
		["Darkvision", 60],
	],
	age : " reach adulthood at age 12 and live less than a century, about 80 years on average.",
	height : " are usually over 6' tall (5'4\" + 2d8\")",
	weight : " typically weigh between 230 and 280 lb (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " are usually over 1.80 metres tall (160 + 5d8 cm)",
	weightMetric : " typically weigh between 100 and 125 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
	trait : "Orc:\n   Adrenaline Rush: Proficiency Bonus per Long Rest, I can take the Dash action as a Bonus Action and gain my Proficiency Bonus in Temporary Hit Points.\n\n   Powerful Build: I count as one Size larger when determining my carrying capacity and the weight I can push, drag, or lift.\n\n   Relentless Endurance: Once per long rest, when I am reduced to 0 hit points but not killed outright, I can drop to 1 hit point instead.",
	features : {
		"adrenaline rush" : {
			name : "Adrenaline Rush",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [
				["bonus action", "Adrenaline Rush"],
			],
		},
		"relentless endurance" : {
			name : "Relentless Endurance",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
		},
	},
	carryingCapacity : 2,
};

// Tieflings
RaceList["abyssal tiefling ua22co"] = {
	regExpSearch : /^(?=.*tiefling)(?=.*abyssal).*$/i,
	name : "Abyssal Tiefling (UA22CO)",
	sortname : "Tiefling, Abyssal (UA22CO)",
	plural : "Teiflings",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	vision : [["Darkvision", 60]],
	dmgres : ["Poison"],
	age : " mature at the same rate as humans but live a few years longer, about 100 years on average.",
	height : " range from 3' to over 6 feet tall (2'11\" + 5d8\")",
	weight : " typically weigh 155 lb (75 + 5d8 \xD7 1d4 lb)",
	heightMetric : " range from .91 to over 1.8 metres tall (89 + 9d10 cm)",
	weightMetric : " typically weigh around 74 kg (34 + 6d8 \xD7 4d4 / 10 kg)",
	trait : "Abyssal Tiefling:\n   Fiendish Legacy: I am the recipient of an Abyssal fiendish legacy that grants me supernatural abilities:\nAt 1st level, I am resistant to Poison Damage & know the Poison Spray cantrip.\nAt 3rd level, I become able to cast Ray of Sickness.\nAt 5th level, I become able to cast Hold Person.\n   I can cast these spells once without a spell slot. Intelligence, Wisdom, or Charisma is my spellcasting ability for the Spells I cast with this trait (choose the ability when I select the lineage).\n\n   Otherworldly Presence: I know the Thaumaturgy cantrip. When I cast it with this trait, the Spell uses the same spellcasting ability I use for my Fiendish Legacy trait.",
};
AddRacialVariant("abyssal tiefling ua22co", "int spellcasting", {
	regExpSearch : /^(?=.*int)(?=.*spellcasting).*$/i,
	name : "Abyssal Tiefling (UA22CO)",
	plural : "Tieflings",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	trait : "Abyssal Tiefling:\n   Fiendish Legacy: I am the recipient of an Abyssal fiendish legacy that grants me supernatural abilities:\nAt 1st level, I am resistant to Poison Damage & know the Poison Spray cantrip.\nAt 3rd level, I become able to cast Ray of Sickness.\nAt 5th level, I become able to cast Hold Person.\n   I can cast these spells once without a spell slot. Intelligence is my spellcasting ability for the Spells I cast with this trait.\n\n   Otherworldly Presence: I know the Thaumaturgy cantrip. When I cast it with this trait, the Spell uses the same spellcasting ability I use for my Fiendish Legacy trait.",
	spellcastingAbility : 4,
	features : {
		"otherworldly presence" : {
			name : "Otherworldy Presence",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
				firstCol : 'atwill',
			},
		},
		"poison spray" : {
			name : "Poison Spray",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["poison spray", "poison spray ua23bc"],
				selection : ["poison spray", "poison spray ua23bc"],
				firstCol : 'atwill',
			},
		},
		"ray of sickness" : {
			name : "Ray of Sickness",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["ray of sickness"],
				selection : ["ray of sickness"],
				firstCol : 'oncelr',
			},
		},
		"hold person" : {
			name : "Hold Person",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["hold person"],
				selection : ["hold person"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("abyssal tiefling ua22co", "wis spellcasting", {
	regExpSearch : /^(?=.*wis)(?=.*spellcasting).*$/i,
	name : "Abyssal Tiefling (UA22CO)",
	plural : "Tieflings",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	trait : "Abyssal Tiefling:\n   Fiendish Legacy: I am the recipient of an Abyssal fiendish legacy that grants me supernatural abilities:\nAt 1st level, I am resistant to Poison Damage & know the Poison Spray cantrip.\nAt 3rd level, I become able to cast Ray of Sickness.\nAt 5th level, I become able to cast Hold Person.\n   I can cast these spells once without a spell slot. Wisdom is my spellcasting ability for the Spells I cast with this trait.\n\n   Otherworldly Presence: I know the Thaumaturgy cantrip. When I cast it with this trait, the Spell uses the same spellcasting ability I use for my Fiendish Legacy trait.",
	spellcastingAbility : 5,
	features : {
		"otherworldly presence" : {
			name : "Otherworldy Presence",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
				firstCol : 'atwill',
			},
		},
		"poison spray" : {
			name : "Poison Spray",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["poison spray", "poison spray ua23bc"],
				selection : ["poison spray", "poison spray ua23bc"],
				firstCol : 'atwill',
			},
		},
		"ray of sickness" : {
			name : "Ray of Sickness",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["ray of sickness"],
				selection : ["ray of sickness"],
				firstCol : 'oncelr',
			},
		},
		"hold person" : {
			name : "Hold Person",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["hold person"],
				selection : ["hold person"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("abyssal tiefling ua22co", "cha spellcasting", {
	regExpSearch : /^(?=.*cha)(?=.*spellcasting).*$/i,
	name : "Abyssal Tiefling (UA22CO)",
	plural : "Tieflings",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	trait : "Abyssal Tiefling:\n   Fiendish Legacy: I am the recipient of an Abyssal fiendish legacy that grants me supernatural abilities:\nAt 1st level, I am resistant to Poison Damage & know the Poison Spray cantrip.\nAt 3rd level, I become able to cast Ray of Sickness.\nAt 5th level, I become able to cast Hold Person.\n   I can cast these spells once without a spell slot. Charisma is my spellcasting ability for the Spells I cast with this trait.\n\n   Otherworldly Presence: I know the Thaumaturgy cantrip. When I cast it with this trait, the Spell uses the same spellcasting ability I use for my Fiendish Legacy trait.",
	spellcastingAbility : 6,
	features : {
		"otherworldly presence" : {
			name : "Otherworldy Presence",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
				firstCol : 'atwill',
			},
		},
		"poison spray" : {
			name : "Poison Spray",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["poison spray", "poison spray ua23bc"],
				selection : ["poison spray", "poison spray ua23bc"],
				firstCol : 'atwill',
			},
		},
		"ray of sickness" : {
			name : "Ray of Sickness",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["ray of sickness"],
				selection : ["ray of sickness"],
				firstCol : 'oncelr',
			},
		},
		"hold person" : {
			name : "Hold Person",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["hold person"],
				selection : ["hold person"],
				firstCol : 'oncelr',
			},
		},
	},
});

RaceList["cthonic tiefling ua22co"] = {
	regExpSearch : /^(?=.*tiefling)(?=.*cthonic).*$/i,
	name : "Cthonic Tiefling (UA22CO)",
	sortname : "Tiefling, Cthonic (UA22CO)",
	plural : "Teiflings",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic"],
	age : " mature at the same rate as humans but live a few years longer, about 100 years on average.",
	height : " range from 3' to over 6 feet tall (2'11\" + 5d8\")",
	weight : " typically weigh 155 lb (75 + 5d8 \xD7 1d4 lb)",
	heightMetric : " range from .91 to over 1.8 metres tall (89 + 9d10 cm)",
	weightMetric : " typically weigh around 74 kg (34 + 6d8 \xD7 4d4 / 10 kg)",
	trait : "Cthonic Tiefling:\n   Fiendish Legacy: I am the recipient of a Cthonic fiendish legacy that grants me supernatural abilities:\nAt 1st level, I am resistant to Necrotic Damage & know the Chill Touch cantrip.\nAt 3rd level, I become able to cast False Life.\nAt 5th level, I become able to cast Ray of Enfeeblement.\n   I can cast these spells once without a spell slot. Intelligence, Wisdom, or Charisma is my spellcasting ability for the Spells I cast with this trait (choose the ability when I select the lineage).\n\n   Otherworldly Presence: I know the Thaumaturgy cantrip. When I cast it with this trait, the Spell uses the same spellcasting ability I use for my Fiendish Legacy trait.",
};
AddRacialVariant("cthonic tiefling ua22co", "int spellcasting", {
	regExpSearch : /^(?=.*int)(?=.*spellcasting).*$/i,
	name : "Cthonic Tiefling (UA22CO)",
	plural : "Tieflings",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	trait : "Cthonic Tiefling:\n   Fiendish Legacy: I am the recipient of a Cthonic fiendish legacy that grants me supernatural abilities:\nAt 1st level, I am resistant to Necrotic Damage & know the Chill Touch cantrip.\nAt 3rd level, I become able to cast False Life.\nAt 5th level, I become able to cast Ray of Enfeeblement.\n   I can cast these spells once without a spell slot. Intelligence is my spellcasting ability for the Spells I cast with this trait.\n\n   Otherworldly Presence: I know the Thaumaturgy cantrip. When I cast it with this trait, the Spell uses the same spellcasting ability I use for my Fiendish Legacy trait.",
	spellcastingAbility : 4,
	features : {
		"otherworldly presence" : {
			name : "Otherworldy Presence",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
				firstCol : 'atwill',
			},
		},
		"chill touch" : {
			name : "Chill Touch",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["chill touch", "chill touch ua23bc"],
				selection : ["chill touch", "chill touch ua23bc"],
				firstCol : 'atwill',
			},
		},
		"false life" : {
			name : "False Life",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["false life"],
				selection : ["false life"],
				firstCol : 'oncelr',
			},
		},
		"ray of enfeeblement" : {
			name : "Ray of Enfeeblement",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["ray of enfeeblement"],
				selection : ["ray of enfeeblement"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("cthonic tiefling ua22co", "wis spellcasting", {
	regExpSearch : /^(?=.*wis)(?=.*spellcasting).*$/i,
	name : "Cthonic Tiefling (UA22CO)",
	plural : "Tieflings",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	trait : "Cthonic Tiefling:\n   Fiendish Legacy: I am the recipient of a Cthonic fiendish legacy that grants me supernatural abilities:\nAt 1st level, I am resistant to Necrotic Damage & know the Chill Touch cantrip.\nAt 3rd level, I become able to cast False Life.\nAt 5th level, I become able to cast Ray of Enfeeblement.\n   I can cast these spells once without a spell slot. Wisdom is my spellcasting ability for the Spells I cast with this trait.\n\n   Otherworldly Presence: I know the Thaumaturgy cantrip. When I cast it with this trait, the Spell uses the same spellcasting ability I use for my Fiendish Legacy trait.",
	spellcastingAbility : 5,
	features : {
		"otherworldly presence" : {
			name : "Otherworldy Presence",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
				firstCol : 'atwill',
			},
		},
		"chill touch" : {
			name : "Chill Touch",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["chill touch", "chill touch ua23bc"],
				selection : ["chill touch", "chill touch ua23bc"],
				firstCol : 'atwill',
			},
		},
		"false life" : {
			name : "False Life",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["false life"],
				selection : ["false life"],
				firstCol : 'oncelr',
			},
		},
		"ray of enfeeblement" : {
			name : "Ray of Enfeeblement",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["ray of enfeeblement"],
				selection : ["ray of enfeeblement"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("cthonic tiefling ua22co", "cha spellcasting", {
	regExpSearch : /^(?=.*cha)(?=.*spellcasting).*$/i,
	name : "Cthonic Tiefling (UA22CO)",
	plural : "Tieflings",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	trait : "Cthonic Tiefling:\n   Fiendish Legacy: I am the recipient of a Cthonic fiendish legacy that grants me supernatural abilities:\nAt 1st level, I am resistant to Necrotic Damage & know the Chill Touch cantrip.\nAt 3rd level, I become able to cast False Life.\nAt 5th level, I become able to cast Ray of Enfeeblement.\n   I can cast these spells once without a spell slot. Charisma is my spellcasting ability for the Spells I cast with this trait.\n\n   Otherworldly Presence: I know the Thaumaturgy cantrip. When I cast it with this trait, the Spell uses the same spellcasting ability I use for my Fiendish Legacy trait.",
	spellcastingAbility : 6,
	features : {
		"otherworldly presence" : {
			name : "Otherworldy Presence",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
				firstCol : 'atwill',
			},
		},
		"chill touch" : {
			name : "Chill Touch",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["chill touch", "chill touch ua23bc"],
				selection : ["chill touch", "chill touch ua23bc"],
				firstCol : 'atwill',
			},
		},
		"false life" : {
			name : "False Life",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["false life"],
				selection : ["false life"],
				firstCol : 'oncelr',
			},
		},
		"ray of enfeeblement" : {
			name : "Ray of Enfeeblement",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["ray of enfeeblement"],
				selection : ["ray of enfeeblement"],
				firstCol : 'oncelr',
			},
		},
	},
});

RaceList["infernal tiefling ua22co"] = {
	regExpSearch : /^(?=.*tiefling)(?=.*infernal).*$/i,
	name : "Infernal Tiefling (UA22CO)",
	sortname : "Tiefling, Infernal (UA22CO)",
	plural : "Teiflings",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " mature at the same rate as humans but live a few years longer, about 100 years on average.",
	height : " range from 3' to over 6 feet tall (2'11\" + 5d8\")",
	weight : " typically weigh 155 lb (75 + 5d8 \xD7 1d4 lb)",
	heightMetric : " range from .91 to over 1.8 metres tall (89 + 9d10 cm)",
	weightMetric : " typically weigh around 74 kg (34 + 6d8 \xD7 4d4 / 10 kg)",
	trait : "Infernal Tiefling:\n   Fiendish Legacy: I am the recipient of an Infernal fiendish legacy that grants me supernatural abilities:\nAt 1st level, I am resistant to Fire Damage & know the Fire Bolt cantrip.\nAt 3rd level, I become able to cast Hellish Rebuke.\nAt 5th level, I become able to cast Darkness.\n   I can cast these spells once without a spell slot. Intelligence, Wisdom, or Charisma is my spellcasting ability for the Spells I cast with this trait (choose the ability when I select the lineage).\n\n   Otherworldly Presence: I know the Thaumaturgy cantrip. When I cast it with this trait, the Spell uses the same spellcasting ability I use for my Fiendish Legacy trait.",
};
AddRacialVariant("infernal tiefling ua22co", "int spellcasting", {
	regExpSearch : /^(?=.*int)(?=.*spellcasting).*$/i,
	name : "Infernal Tiefling (UA22CO)",
	plural : "Tieflings",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	trait : "Infernal Tiefling:\n   Fiendish Legacy: I am the recipient of an Infernal fiendish legacy that grants me supernatural abilities:\nAt 1st level, I am resistant to Fire Damage & know the Fire Bolt cantrip.\nAt 3rd level, I become able to cast Hellish Rebuke.\nAt 5th level, I become able to cast Darkness.\n   I can cast these spells once without a spell slot. Intelligence is my spellcasting ability for the Spells I cast with this trait.\n\n   Otherworldly Presence: I know the Thaumaturgy cantrip. When I cast it with this trait, the Spell uses the same spellcasting ability I use for my Fiendish Legacy trait.",
	spellcastingAbility : 4,
	features : {
		"otherworldly presence" : {
			name : "Otherworldy Presence",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
				firstCol : 'atwill',
			},
		},
		"fire bolt" : {
			name : "Fire Bolt",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["fire bolt"],
				selection : ["fire bolt"],
				firstCol : 'atwill',
			},
		},
		"hellish rebuke" : {
			name : "Hellish Rebuke",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["hellish rebuke"],
				selection : ["hellish rebuke"],
				firstCol : 'oncelr',
			},
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["darkness"],
				selection : ["darkness"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("infernal tiefling ua22co", "wis spellcasting", {
	regExpSearch : /^(?=.*wis)(?=.*spellcasting).*$/i,
	name : "Infernal Tiefling (UA22CO)",
	plural : "Tieflings",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	trait : "Infernal Tiefling:\n   Fiendish Legacy: I am the recipient of an Infernal fiendish legacy that grants me supernatural abilities:\nAt 1st level, I am resistant to Fire Damage & know the Fire Bolt cantrip.\nAt 3rd level, I become able to cast Hellish Rebuke.\nAt 5th level, I become able to cast Darkness.\n   I can cast these spells once without a spell slot. Wisdom is my spellcasting ability for the Spells I cast with this trait.\n\n   Otherworldly Presence: I know the Thaumaturgy cantrip. When I cast it with this trait, the Spell uses the same spellcasting ability I use for my Fiendish Legacy trait.",
	spellcastingAbility : 5,
	features : {
		"otherworldly presence" : {
			name : "Otherworldy Presence",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
				firstCol : 'atwill',
			},
		},
		"fire bolt" : {
			name : "Fire Bolt",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["fire bolt"],
				selection : ["fire bolt"],
				firstCol : 'atwill',
			},
		},
		"hellish rebuke" : {
			name : "Hellish Rebuke",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["hellish rebuke"],
				selection : ["hellish rebuke"],
				firstCol : 'oncelr',
			},
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["darkness"],
				selection : ["darkness"],
				firstCol : 'oncelr',
			},
		},
	},
});
AddRacialVariant("infernal tiefling ua22co", "cha spellcasting", {
	regExpSearch : /^(?=.*cha)(?=.*spellcasting).*$/i,
	name : "Infernal Tiefling (UA22CO)",
	plural : "Tieflings",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	trait : "Infernal Tiefling:\n   Fiendish Legacy: I am the recipient of an Infernal fiendish legacy that grants me supernatural abilities:\nAt 1st level, I am resistant to Fire Damage & know the Fire Bolt cantrip.\nAt 3rd level, I become able to cast Hellish Rebuke.\nAt 5th level, I become able to cast Darkness.\n   I can cast these spells once without a spell slot. Charisma is my spellcasting ability for the Spells I cast with this trait.\n\n   Otherworldly Presence: I know the Thaumaturgy cantrip. When I cast it with this trait, the Spell uses the same spellcasting ability I use for my Fiendish Legacy trait.",
	spellcastingAbility : 6,
	features : {
		"otherworldly presence" : {
			name : "Otherworldy Presence",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
				firstCol : 'atwill',
			},
		},
		"fire bolt" : {
			name : "Fire Bolt",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["fire bolt"],
				selection : ["fire bolt"],
				firstCol : 'atwill',
			},
		},
		"hellish rebuke" : {
			name : "Hellish Rebuke",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["hellish rebuke"],
				selection : ["hellish rebuke"],
				firstCol : 'oncelr',
			},
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				spells : ["darkness"],
				selection : ["darkness"],
				firstCol : 'oncelr',
			},
		},
	},
});