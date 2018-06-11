
$(document).ready( function () {
    $('#mainTable').dataTable({
        "order": [[ 0, 'asc' ]],
        "lengthChange": false,
        paging: false,
        searching: false,
        bInfo: false,
        orderClasses: false,
    	'stripeClasses':['stripe1','stripe2'],
    	padding: '0px',

    });
    $('#mainTable').show();

} );
/*$(document).ready(function() {
    $('#example').dataTable({
        "order": [[ 0, 'asc' ]]
    });
    $('#example').show();
} );*/
	
$(document).ready(function() {
    $("#preloader").delay(0).fadeOut(100);
});












var url = 'https://api.opendota.com/api/scenarios/itemTimings?hero_id=80';
var gamesPlayed;
var gamesWon;
var nagaOne;
var data;
var urlMatchHistory = 'http://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1?match_id=3928040707&key=E0CE6784F8D4FDC42D2411AF2AD73237';
var urlMatchHistoryTwo = 'https://api.opendota.com/api/proMatches';



var heroInfo = [
{
	id: 1,
	name: "npc_dota_hero_antimage",
	localized_name: "Anti-Mage",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Escape",
	"Nuker"
	],
	legs: 2
},
{
	id: 2,
	name: "npc_dota_hero_axe",
	localized_name: "Axe",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Initiator",
	"Durable",
	"Disabler",
	"Jungler"
	],
	legs: 2
},
{
	id: 3,
	name: "npc_dota_hero_bane",
	localized_name: "Bane",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Disabler",
	"Nuker",
	"Durable"
	],
	legs: 4
},
{
	id: 4,
	name: "npc_dota_hero_bloodseeker",
	localized_name: "Bloodseeker",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Disabler",
	"Jungler",
	"Nuker",
	"Initiator"
	],
	legs: 2
},
{
	id: 5,
	name: "npc_dota_hero_crystal_maiden",
	localized_name: "Crystal Maiden",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Disabler",
	"Nuker",
	"Jungler"
	],
	legs: 2
},
{
	id: 6,
	name: "npc_dota_hero_drow_ranger",
	localized_name: "Drow Ranger",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Disabler",
	"Pusher"
	],
	legs: 2
},
{
	id: 7,
	name: "npc_dota_hero_earthshaker",
	localized_name: "Earthshaker",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Support",
	"Initiator",
	"Disabler",
	"Nuker"
	],
	legs: 2
},
{
	id: 8,
	name: "npc_dota_hero_juggernaut",
	localized_name: "Juggernaut",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Pusher",
	"Escape"
	],
	legs: 2
},
{
	id: 9,
	name: "npc_dota_hero_mirana",
	localized_name: "Mirana",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Support",
	"Escape",
	"Nuker",
	"Disabler"
	],
	legs: 2
},
{
	id: 10,
	name: "npc_dota_hero_morphling",
	localized_name: "Morphling",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Escape",
	"Durable",
	"Nuker",
	"Disabler"
	],
	legs: 0
},
{
	id: 11,
	name: "npc_dota_hero_nevermore",
	localized_name: "Shadow Fiend",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Nuker"
	],
	legs: 0
},
{
	id: 12,
	name: "npc_dota_hero_phantom_lancer",
	localized_name: "Phantom Lancer",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Escape",
	"Pusher",
	"Nuker"
	],
	legs: 2
},
{
	id: 13,
	name: "npc_dota_hero_puck",
	localized_name: "Puck",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Initiator",
	"Disabler",
	"Escape",
	"Nuker"
	],
	legs: 2
},
{
	id: 14,
	name: "npc_dota_hero_pudge",
	localized_name: "Pudge",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Disabler",
	"Initiator",
	"Durable",
	"Nuker"
	],
	legs: 2
},
{
	id: 15,
	name: "npc_dota_hero_razor",
	localized_name: "Razor",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Durable",
	"Nuker",
	"Pusher"
	],
	legs: 0
},
{
	id: 16,
	name: "npc_dota_hero_sand_king",
	localized_name: "Sand King",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Initiator",
	"Disabler",
	"Support",
	"Nuker",
	"Escape",
	"Jungler"
	],
	legs: 6
},
{
	id: 17,
	name: "npc_dota_hero_storm_spirit",
	localized_name: "Storm Spirit",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Escape",
	"Nuker",
	"Initiator",
	"Disabler"
	],
	legs: 2
},
{
	id: 18,
	name: "npc_dota_hero_sven",
	localized_name: "Sven",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Disabler",
	"Initiator",
	"Durable",
	"Nuker"
	],
	legs: 2
},
{
	id: 19,
	name: "npc_dota_hero_tiny",
	localized_name: "Tiny",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Nuker",
	"Pusher",
	"Initiator",
	"Durable",
	"Disabler"
	],
	legs: 2
},
{
	id: 20,
	name: "npc_dota_hero_vengefulspirit",
	localized_name: "Vengeful Spirit",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Initiator",
	"Disabler",
	"Nuker",
	"Escape"
	],
	legs: 2
},
{
	id: 21,
	name: "npc_dota_hero_windrunner",
	localized_name: "Windranger",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Support",
	"Disabler",
	"Escape",
	"Nuker"
	],
	legs: 2
},
{
	id: 22,
	name: "npc_dota_hero_zuus",
	localized_name: "Zeus",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Nuker"
	],
	legs: 2
},
{
	id: 23,
	name: "npc_dota_hero_kunkka",
	localized_name: "Kunkka",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Support",
	"Disabler",
	"Initiator",
	"Durable",
	"Nuker"
	],
	legs: 2
},
{
	id: 25,
	name: "npc_dota_hero_lina",
	localized_name: "Lina",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Carry",
	"Nuker",
	"Disabler"
	],
	legs: 2
},
{
	id: 26,
	name: "npc_dota_hero_lion",
	localized_name: "Lion",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Disabler",
	"Nuker",
	"Initiator"
	],
	legs: 2
},
{
	id: 27,
	name: "npc_dota_hero_shadow_shaman",
	localized_name: "Shadow Shaman",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Pusher",
	"Disabler",
	"Nuker",
	"Initiator"
	],
	legs: 2
},
{
	id: 28,
	name: "npc_dota_hero_slardar",
	localized_name: "Slardar",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Durable",
	"Initiator",
	"Disabler",
	"Escape"
	],
	legs: 0
},
{
	id: 29,
	name: "npc_dota_hero_tidehunter",
	localized_name: "Tidehunter",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Initiator",
	"Durable",
	"Disabler",
	"Nuker"
	],
	legs: 2
},
{
	id: 30,
	name: "npc_dota_hero_witch_doctor",
	localized_name: "Witch Doctor",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Nuker",
	"Disabler"
	],
	legs: 2
},
{
	id: 31,
	name: "npc_dota_hero_lich",
	localized_name: "Lich",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Nuker"
	],
	legs: 2
},
{
	id: 32,
	name: "npc_dota_hero_riki",
	localized_name: "Riki",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Escape",
	"Disabler"
	],
	legs: 2
},
{
	id: 33,
	name: "npc_dota_hero_enigma",
	localized_name: "Enigma",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Disabler",
	"Jungler",
	"Initiator",
	"Pusher"
	],
	legs: 0
},
{
	id: 34,
	name: "npc_dota_hero_tinker",
	localized_name: "Tinker",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Nuker",
	"Pusher"
	],
	legs: 2
},
{
	id: 35,
	name: "npc_dota_hero_sniper",
	localized_name: "Sniper",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Nuker"
	],
	legs: 2
},
{
	id: 36,
	name: "npc_dota_hero_necrolyte",
	localized_name: "Necrophos",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Nuker",
	"Durable",
	"Disabler"
	],
	legs: 2
},
{
	id: 37,
	name: "npc_dota_hero_warlock",
	localized_name: "Warlock",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Initiator",
	"Disabler"
	],
	legs: 2
},
{
	id: 38,
	name: "npc_dota_hero_beastmaster",
	localized_name: "Beastmaster",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Initiator",
	"Disabler",
	"Durable",
	"Nuker"
	],
	legs: 2
},
{
	id: 39,
	name: "npc_dota_hero_queenofpain",
	localized_name: "Queen of Pain",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Nuker",
	"Escape"
	],
	legs: 2
},
{
	id: 40,
	name: "npc_dota_hero_venomancer",
	localized_name: "Venomancer",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Nuker",
	"Initiator",
	"Pusher",
	"Disabler"
	],
	legs: 0
},
{
	id: 41,
	name: "npc_dota_hero_faceless_void",
	localized_name: "Faceless Void",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Initiator",
	"Disabler",
	"Escape",
	"Durable"
	],
	legs: 2
},
{
	id: 42,
	name: "npc_dota_hero_skeleton_king",
	localized_name: "Wraith King",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Support",
	"Durable",
	"Disabler",
	"Initiator"
	],
	legs: 2
},
{
	id: 43,
	name: "npc_dota_hero_death_prophet",
	localized_name: "Death Prophet",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Pusher",
	"Nuker",
	"Disabler"
	],
	legs: 2
},
{
	id: 44,
	name: "npc_dota_hero_phantom_assassin",
	localized_name: "Phantom Assassin",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Escape"
	],
	legs: 2
},
{
	id: 45,
	name: "npc_dota_hero_pugna",
	localized_name: "Pugna",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Nuker",
	"Pusher"
	],
	legs: 2
},
{
	id: 46,
	name: "npc_dota_hero_templar_assassin",
	localized_name: "Templar Assassin",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Escape"
	],
	legs: 2
},
{
	id: 47,
	name: "npc_dota_hero_viper",
	localized_name: "Viper",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Durable",
	"Initiator",
	"Disabler"
	],
	legs: 0
},
{
	id: 48,
	name: "npc_dota_hero_luna",
	localized_name: "Luna",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Nuker",
	"Pusher"
	],
	legs: 2
},
{
	id: 49,
	name: "npc_dota_hero_dragon_knight",
	localized_name: "Dragon Knight",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Pusher",
	"Durable",
	"Disabler",
	"Initiator",
	"Nuker"
	],
	legs: 2
},
{
	id: 50,
	name: "npc_dota_hero_dazzle",
	localized_name: "Dazzle",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Nuker",
	"Disabler"
	],
	legs: 2
},
{
	id: 51,
	name: "npc_dota_hero_rattletrap",
	localized_name: "Clockwerk",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Initiator",
	"Disabler",
	"Durable",
	"Nuker"
	],
	legs: 2
},
{
	id: 52,
	name: "npc_dota_hero_leshrac",
	localized_name: "Leshrac",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Support",
	"Nuker",
	"Pusher",
	"Disabler"
	],
	legs: 4
},
{
	id: 53,
	name: "npc_dota_hero_furion",
	localized_name: "Nature's Prophet",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Jungler",
	"Pusher",
	"Escape",
	"Nuker"
	],
	legs: 2
},
{
	id: 54,
	name: "npc_dota_hero_life_stealer",
	localized_name: "Lifestealer",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Durable",
	"Jungler",
	"Escape",
	"Disabler"
	],
	legs: 2
},
{
	id: 55,
	name: "npc_dota_hero_dark_seer",
	localized_name: "Dark Seer",
	primary_attr: "int",
	attack_type: "Melee",
	roles: [
	"Initiator",
	"Jungler",
	"Escape",
	"Disabler"
	],
	legs: 2
},
{
	id: 56,
	name: "npc_dota_hero_clinkz",
	localized_name: "Clinkz",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Escape",
	"Pusher"
	],
	legs: 2
},
{
	id: 57,
	name: "npc_dota_hero_omniknight",
	localized_name: "Omniknight",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Support",
	"Durable",
	"Nuker"
	],
	legs: 2
},
{
	id: 58,
	name: "npc_dota_hero_enchantress",
	localized_name: "Enchantress",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Jungler",
	"Pusher",
	"Durable",
	"Disabler"
	],
	legs: 4
},
{
	id: 59,
	name: "npc_dota_hero_huskar",
	localized_name: "Huskar",
	primary_attr: "str",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Durable",
	"Initiator"
	],
	legs: 2
},
{
	id: 60,
	name: "npc_dota_hero_night_stalker",
	localized_name: "Night Stalker",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Initiator",
	"Durable",
	"Disabler",
	"Nuker"
	],
	legs: 2
},
{
	id: 61,
	name: "npc_dota_hero_broodmother",
	localized_name: "Broodmother",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Pusher",
	"Escape",
	"Nuker"
	],
	legs: 8
},
{
	id: 62,
	name: "npc_dota_hero_bounty_hunter",
	localized_name: "Bounty Hunter",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Escape",
	"Nuker"
	],
	legs: 2
},
{
	id: 63,
	name: "npc_dota_hero_weaver",
	localized_name: "Weaver",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Escape"
	],
	legs: 4
},
{
	id: 64,
	name: "npc_dota_hero_jakiro",
	localized_name: "Jakiro",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Nuker",
	"Pusher",
	"Disabler"
	],
	legs: 2
},
{
	id: 65,
	name: "npc_dota_hero_batrider",
	localized_name: "Batrider",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Initiator",
	"Jungler",
	"Disabler",
	"Escape"
	],
	legs: 2
},
{
	id: 66,
	name: "npc_dota_hero_chen",
	localized_name: "Chen",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Jungler",
	"Pusher"
	],
	legs: 2
},
{
	id: 67,
	name: "npc_dota_hero_spectre",
	localized_name: "Spectre",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Durable",
	"Escape"
	],
	legs: 0
},
{
	id: 68,
	name: "npc_dota_hero_ancient_apparition",
	localized_name: "Ancient Apparition",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Disabler",
	"Nuker"
	],
	legs: 2
},
{
	id: 69,
	name: "npc_dota_hero_doom_bringer",
	localized_name: "Doom",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Disabler",
	"Initiator",
	"Durable",
	"Nuker"
	],
	legs: 2
},
{
	id: 70,
	name: "npc_dota_hero_ursa",
	localized_name: "Ursa",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Jungler",
	"Durable",
	"Disabler"
	],
	legs: 2
},
{
	id: 71,
	name: "npc_dota_hero_spirit_breaker",
	localized_name: "Spirit Breaker",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Initiator",
	"Disabler",
	"Durable",
	"Escape"
	],
	legs: 2
},
{
	id: 72,
	name: "npc_dota_hero_gyrocopter",
	localized_name: "Gyrocopter",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Nuker",
	"Disabler"
	],
	legs: 2
},
{
	id: 73,
	name: "npc_dota_hero_alchemist",
	localized_name: "Alchemist",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Support",
	"Durable",
	"Disabler",
	"Initiator",
	"Nuker"
	],
	legs: 2
},
{
	id: 74,
	name: "npc_dota_hero_invoker",
	localized_name: "Invoker",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Nuker",
	"Disabler",
	"Escape",
	"Pusher"
	],
	legs: 2
},
{
	id: 75,
	name: "npc_dota_hero_silencer",
	localized_name: "Silencer",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Support",
	"Disabler",
	"Initiator",
	"Nuker"
	],
	legs: 2
},
{
	id: 76,
	name: "npc_dota_hero_obsidian_destroyer",
	localized_name: "Outworld Devourer",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Nuker",
	"Disabler"
	],
	legs: 4
},
{
	id: 77,
	name: "npc_dota_hero_lycan",
	localized_name: "Lycan",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Pusher",
	"Jungler",
	"Durable",
	"Escape"
	],
	legs: 2
},
{
	id: 78,
	name: "npc_dota_hero_brewmaster",
	localized_name: "Brewmaster",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Initiator",
	"Durable",
	"Disabler",
	"Nuker"
	],
	legs: 2
},
{
	id: 79,
	name: "npc_dota_hero_shadow_demon",
	localized_name: "Shadow Demon",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Disabler",
	"Initiator",
	"Nuker"
	],
	legs: 2
},
{
	id: 80,
	name: "npc_dota_hero_lone_druid",
	localized_name: "Lone Druid",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Pusher",
	"Jungler",
	"Durable"
	],
	legs: 2
},
{
	id: 81,
	name: "npc_dota_hero_chaos_knight",
	localized_name: "Chaos Knight",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Disabler",
	"Durable",
	"Pusher",
	"Initiator"
	],
	legs: 2
},
{
	id: 82,
	name: "npc_dota_hero_meepo",
	localized_name: "Meepo",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Escape",
	"Nuker",
	"Disabler",
	"Initiator",
	"Pusher"
	],
	legs: 2
},
{
	id: 83,
	name: "npc_dota_hero_treant",
	localized_name: "Treant Protector",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Support",
	"Initiator",
	"Durable",
	"Disabler",
	"Escape"
	],
	legs: 2
},
{
	id: 84,
	name: "npc_dota_hero_ogre_magi",
	localized_name: "Ogre Magi",
	primary_attr: "int",
	attack_type: "Melee",
	roles: [
	"Support",
	"Nuker",
	"Disabler",
	"Durable",
	"Initiator"
	],
	legs: 2
},
{
	id: 85,
	name: "npc_dota_hero_undying",
	localized_name: "Undying",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Support",
	"Durable",
	"Disabler",
	"Nuker"
	],
	legs: 2
},
{
	id: 86,
	name: "npc_dota_hero_rubick",
	localized_name: "Rubick",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Disabler",
	"Nuker"
	],
	legs: 2
},
{
	id: 87,
	name: "npc_dota_hero_disruptor",
	localized_name: "Disruptor",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Disabler",
	"Nuker",
	"Initiator"
	],
	legs: 2
},
{
	id: 88,
	name: "npc_dota_hero_nyx_assassin",
	localized_name: "Nyx Assassin",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Disabler",
	"Nuker",
	"Initiator",
	"Escape"
	],
	legs: 6
},
{
	id: 89,
	name: "npc_dota_hero_naga_siren",
	localized_name: "Naga Siren",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Support",
	"Pusher",
	"Disabler",
	"Initiator",
	"Escape"
	],
	legs: 0
},
{
	id: 90,
	name: "npc_dota_hero_keeper_of_the_light",
	localized_name: "Keeper of the Light",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Nuker",
	"Disabler",
	"Jungler"
	],
	legs: 2
},
{
	id: 91,
	name: "npc_dota_hero_wisp",
	localized_name: "Io",
	primary_attr: "str",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Escape",
	"Nuker"
	],
	legs: 0
},
{
	id: 92,
	name: "npc_dota_hero_visage",
	localized_name: "Visage",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Nuker",
	"Durable",
	"Disabler",
	"Pusher"
	],
	legs: 2
},
{
	id: 93,
	name: "npc_dota_hero_slark",
	localized_name: "Slark",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Escape",
	"Disabler",
	"Nuker"
	],
	legs: 2
},
{
	id: 94,
	name: "npc_dota_hero_medusa",
	localized_name: "Medusa",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Disabler",
	"Durable"
	],
	legs: 0
},
{
	id: 95,
	name: "npc_dota_hero_troll_warlord",
	localized_name: "Troll Warlord",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Pusher",
	"Disabler",
	"Durable"
	],
	legs: 2
},
{
	id: 96,
	name: "npc_dota_hero_centaur",
	localized_name: "Centaur Warrunner",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Durable",
	"Initiator",
	"Disabler",
	"Nuker",
	"Escape"
	],
	legs: 4
},
{
	id: 97,
	name: "npc_dota_hero_magnataur",
	localized_name: "Magnus",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Initiator",
	"Disabler",
	"Nuker",
	"Escape"
	],
	legs: 4
},
{
	id: 98,
	name: "npc_dota_hero_shredder",
	localized_name: "Timbersaw",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Nuker",
	"Durable",
	"Escape"
	],
	legs: 2
},
{
	id: 99,
	name: "npc_dota_hero_bristleback",
	localized_name: "Bristleback",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Durable",
	"Initiator",
	"Nuker"
	],
	legs: 2
},
{
	id: 100,
	name: "npc_dota_hero_tusk",
	localized_name: "Tusk",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Initiator",
	"Disabler",
	"Nuker"
	],
	legs: 2
},
{
	id: 101,
	name: "npc_dota_hero_skywrath_mage",
	localized_name: "Skywrath Mage",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Nuker",
	"Disabler"
	],
	legs: 2
},
{
	id: 102,
	name: "npc_dota_hero_abaddon",
	localized_name: "Abaddon",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Support",
	"Carry",
	"Durable"
	],
	legs: 2
},
{
	id: 103,
	name: "npc_dota_hero_elder_titan",
	localized_name: "Elder Titan",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Initiator",
	"Disabler",
	"Nuker",
	"Durable"
	],
	legs: 2
},
{
	id: 104,
	name: "npc_dota_hero_legion_commander",
	localized_name: "Legion Commander",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Disabler",
	"Initiator",
	"Durable",
	"Nuker"
	],
	legs: 2
},
{
	id: 105,
	name: "npc_dota_hero_techies",
	localized_name: "Techies",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Nuker",
	"Disabler"
	],
	legs: 6
},
{
	id: 106,
	name: "npc_dota_hero_ember_spirit",
	localized_name: "Ember Spirit",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Escape",
	"Nuker",
	"Disabler",
	"Initiator"
	],
	legs: 2
},
{
	id: 107,
	name: "npc_dota_hero_earth_spirit",
	localized_name: "Earth Spirit",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Nuker",
	"Escape",
	"Disabler",
	"Initiator",
	"Durable"
	],
	legs: 2
},
{
	id: 108,
	name: "npc_dota_hero_abyssal_underlord",
	localized_name: "Underlord",
	primary_attr: "str",
	attack_type: "Melee",
	roles: [
	"Support",
	"Nuker",
	"Disabler",
	"Durable",
	"Escape"
	],
	legs: 2
},
{
	id: 109,
	name: "npc_dota_hero_terrorblade",
	localized_name: "Terrorblade",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Pusher",
	"Nuker"
	],
	legs: 2
},
{
	id: 110,
	name: "npc_dota_hero_phoenix",
	localized_name: "Phoenix",
	primary_attr: "str",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Nuker",
	"Initiator",
	"Escape",
	"Disabler"
	],
	legs: 2
},
{
	id: 111,
	name: "npc_dota_hero_oracle",
	localized_name: "Oracle",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Nuker",
	"Disabler",
	"Escape"
	],
	legs: 2
},
{
	id: 112,
	name: "npc_dota_hero_winter_wyvern",
	localized_name: "Winter Wyvern",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Disabler",
	"Nuker"
	],
	legs: 2
},
{
	id: 113,
	name: "npc_dota_hero_arc_warden",
	localized_name: "Arc Warden",
	primary_attr: "agi",
	attack_type: "Ranged",
	roles: [
	"Carry",
	"Escape",
	"Nuker"
	],
	legs: 2
},
{
	id: 114,
	name: "npc_dota_hero_monkey_king",
	localized_name: "Monkey King",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Escape",
	"Disabler",
	"Initiator"
	],
	legs: 2
},
{
	id: 119,
	name: "npc_dota_hero_dark_willow",
	localized_name: "Dark Willow",
	primary_attr: "int",
	attack_type: "Ranged",
	roles: [
	"Support",
	"Nuker",
	"Disabler",
	"Escape"
	],
	legs: 2
},
{
	id: 120,
	name: "npc_dota_hero_pangolier",
	localized_name: "Pangolier",
	primary_attr: "agi",
	attack_type: "Melee",
	roles: [
	"Carry",
	"Nuker",
	"Disabler",
	"Durable",
	"Escape",
	"Initiator"
	],
	legs: 2
}
] ;

var itemId = [
{
	"id": 260,
	"name": "refresher_shard"	
},
{
	"id": 225,
	"name": "nullifier"	
},
{
	"id": 223,
	"name": "meteor_hammer"	
},
{
	"id": 256,
	"name": "aeon_disk"	
},
{
	"id": 259,
	"name": "kaya"	
},
{
	"id": 267,
	"name": "spirit_vessel"	
},
{
	"id": 0,
	"name": "empty"
},
{
	"id": 1,
	"name": "blink"
},
{
	"id": 2,
	"name": "blades_of_attack"
},
{
	"id": 3,
	"name": "broadsword"
},
{
	"id": 4,
	"name": "chainmail"
},
{
	"id": 5,
	"name": "claymore"
},
{
	"id": 6,
	"name": "helm_of_iron_will"
},
{
	"id": 7,
	"name": "javelin"
},
{
	"id": 8,
	"name": "mithril_hammer"
},
{
	"id": 9,
	"name": "platemail"
},
{
	"id": 10,
	"name": "quarterstaff"
},
{
	"id": 11,
	"name": "quelling_blade"
},
{
	"id": 12,
	"name": "ring_of_protection"
},
{
	"id": 182,
	"name": "stout_shield"
},
{
	"id": 13,
	"name": "gauntlets"
},
{
	"id": 14,
	"name": "slippers"
},
{
	"id": 15,
	"name": "mantle"
},
{
	"id": 16,
	"name": "branches"
},
{
	"id": 17,
	"name": "belt_of_strength"
},
{
	"id": 18,
	"name": "boots_of_elves"
},
{
	"id": 19,
	"name": "robe"
},
{
	"id": 20,
	"name": "circlet"
},
{
	"id": 21,
	"name": "ogre_axe"
},
{
	"id": 22,
	"name": "blade_of_alacrity"
},
{
	"id": 23,
	"name": "staff_of_wizardry"
},
{
	"id": 24,
	"name": "ultimate_orb"
},
{
	"id": 25,
	"name": "gloves"
},
{
	"id": 26,
	"name": "lifesteal"
},
{
	"id": 27,
	"name": "ring_of_regen"
},
{
	"id": 28,
	"name": "sobi_mask"
},
{
	"id": 29,
	"name": "boots"
},
{
	"id": 30,
	"name": "gem"
},
{
	"id": 31,
	"name": "cloak"
},
{
	"id": 32,
	"name": "talisman_of_evasion"
},
{
	"id": 33,
	"name": "cheese"
},
{
	"id": 34,
	"name": "magic_stick"
},
{
	"id": 35,
	"name": "recipe_magic_wand"
},
{
	"id": 36,
	"name": "magic_wand"
},
{
	"id": 37,
	"name": "ghost"
},
{
	"id": 38,
	"name": "clarity"
},
{
	"id": 39,
	"name": "flask"
},
{
	"id": 40,
	"name": "dust"
},
{
	"id": 41,
	"name": "bottle"
},
{
	"id": 42,
	"name": "ward_observer"
},
{
	"id": 43,
	"name": "ward_sentry"
},
{
	"id": 44,
	"name": "tango"
},
{
	"id": 45,
	"name": "courier"
},
{
	"id": 46,
	"name": "tpscroll"
},
{
	"id": 47,
	"name": "recipe_travel_boots"
},
{
	"id": 48,
	"name": "travel_boots"
},
{
	"id": 49,
	"name": "recipe_phase_boots"
},
{
	"id": 50,
	"name": "phase_boots"
},
{
	"id": 51,
	"name": "demon_edge"
},
{
	"id": 52,
	"name": "eagle"
},
{
	"id": 53,
	"name": "reaver"
},
{
	"id": 54,
	"name": "relic"
},
{
	"id": 55,
	"name": "hyperstone"
},
{
	"id": 56,
	"name": "ring_of_health"
},
{
	"id": 57,
	"name": "void_stone"
},
{
	"id": 58,
	"name": "mystic_staff"
},
{
	"id": 59,
	"name": "energy_booster"
},
{
	"id": 60,
	"name": "point_booster"
},
{
	"id": 61,
	"name": "vitality_booster"
},
{
	"id": 62,
	"name": "recipe_power_treads"
},
{
	"id": 63,
	"name": "power_treads"
},
{
	"id": 64,
	"name": "recipe_hand_of_midas"
},
{
	"id": 65,
	"name": "hand_of_midas"
},
{
	"id": 66,
	"name": "recipe_oblivion_staff"
},
{
	"id": 67,
	"name": "oblivion_staff"
},
{
	"id": 68,
	"name": "recipe_pers"
},
{
	"id": 69,
	"name": "pers"
},
{
	"id": 70,
	"name": "recipe_poor_mans_shield"
},
{
	"id": 71,
	"name": "poor_mans_shield"
},
{
	"id": 72,
	"name": "recipe_bracer"
},
{
	"id": 73,
	"name": "bracer"
},
{
	"id": 74,
	"name": "recipe_wraith_band"
},
{
	"id": 75,
	"name": "wraith_band"
},
{
	"id": 76,
	"name": "recipe_null_talisman"
},
{
	"id": 77,
	"name": "null_talisman"
},
{
	"id": 78,
	"name": "recipe_mekansm"
},
{
	"id": 79,
	"name": "mekansm"
},
{
	"id": 80,
	"name": "recipe_vladmir"
},
{
	"id": 81,
	"name": "vladmir"
},
{
	"id": 84,
	"name": "flying_courier"
},
{
	"id": 85,
	"name": "recipe_buckler"
},
{
	"id": 86,
	"name": "buckler"
},
{
	"id": 87,
	"name": "recipe_ring_of_basilius"
},
{
	"id": 88,
	"name": "ring_of_basilius"
},
{
	"id": 89,
	"name": "recipe_pipe"
},
{
	"id": 90,
	"name": "pipe"
},
{
	"id": 91,
	"name": "recipe_urn_of_shadows"
},
{
	"id": 92,
	"name": "urn_of_shadows"
},
{
	"id": 93,
	"name": "recipe_headdress"
},
{
	"id": 94,
	"name": "headdress"
},
{
	"id": 95,
	"name": "recipe_sheepstick"
},
{
	"id": 96,
	"name": "sheepstick"
},
{
	"id": 97,
	"name": "recipe_orchid"
},
{
	"id": 98,
	"name": "orchid"
},
{
	"id": 99,
	"name": "recipe_cyclone"
},
{
	"id": 100,
	"name": "cyclone"
},
{
	"id": 101,
	"name": "recipe_force_staff"
},
{
	"id": 102,
	"name": "force_staff"
},
{
	"id": 103,
	"name": "recipe_dagon"
},
{
	"id": 197,
	"name": "recipe_dagon_2"
},
{
	"id": 198,
	"name": "recipe_dagon_3"
},
{
	"id": 199,
	"name": "recipe_dagon_4"
},
{
	"id": 200,
	"name": "recipe_dagon_5"
},
{
	"id": 104,
	"name": "dagon"
},
{
	"id": 201,
	"name": "dagon_2"
},
{
	"id": 202,
	"name": "dagon_3"
},
{
	"id": 203,
	"name": "dagon_4"
},
{
	"id": 204,
	"name": "dagon_5"
},
{
	"id": 105,
	"name": "recipe_necronomicon"
},
{
	"id": 191,
	"name": "recipe_necronomicon_2"
},
{
	"id": 192,
	"name": "recipe_necronomicon_3"
},
{
	"id": 106,
	"name": "necronomicon"
},
{
	"id": 193,
	"name": "necronomicon_2"
},
{
	"id": 194,
	"name": "necronomicon_3"
},
{
	"id": 107,
	"name": "recipe_ultimate_scepter"
},
{
	"id": 108,
	"name": "ultimate_scepter"
},
{
	"id": 109,
	"name": "recipe_refresher"
},
{
	"id": 110,
	"name": "refresher"
},
{
	"id": 111,
	"name": "recipe_assault"
},
{
	"id": 112,
	"name": "assault"
},
{
	"id": 113,
	"name": "recipe_heart"
},
{
	"id": 114,
	"name": "heart"
},
{
	"id": 115,
	"name": "recipe_black_king_bar"
},
{
	"id": 116,
	"name": "black_king_bar"
},
{
	"id": 117,
	"name": "aegis"
},
{
	"id": 118,
	"name": "recipe_shivas_guard"
},
{
	"id": 119,
	"name": "shivas_guard"
},
{
	"id": 120,
	"name": "recipe_bloodstone"
},
{
	"id": 121,
	"name": "bloodstone"
},
{
	"id": 122,
	"name": "recipe_sphere"
},
{
	"id": 123,
	"name": "sphere"
},
{
	"id": 124,
	"name": "recipe_vanguard"
},
{
	"id": 125,
	"name": "vanguard"
},
{
	"id": 126,
	"name": "recipe_blade_mail"
},
{
	"id": 127,
	"name": "blade_mail"
},
{
	"id": 128,
	"name": "recipe_soul_booster"
},
{
	"id": 129,
	"name": "soul_booster"
},
{
	"id": 130,
	"name": "recipe_hood_of_defiance"
},
{
	"id": 131,
	"name": "hood_of_defiance"
},
{
	"id": 132,
	"name": "recipe_rapier"
},
{
	"id": 133,
	"name": "rapier"
},
{
	"id": 134,
	"name": "recipe_monkey_king_bar"
},
{
	"id": 135,
	"name": "monkey_king_bar"
},
{
	"id": 136,
	"name": "recipe_radiance"
},
{
	"id": 137,
	"name": "radiance"
},
{
	"id": 138,
	"name": "recipe_butterfly"
},
{
	"id": 139,
	"name": "butterfly"
},
{
	"id": 140,
	"name": "recipe_greater_crit"
},
{
	"id": 141,
	"name": "greater_crit"
},
{
	"id": 142,
	"name": "recipe_basher"
},
{
	"id": 143,
	"name": "basher"
},
{
	"id": 144,
	"name": "recipe_bfury"
},
{
	"id": 145,
	"name": "bfury"
},
{
	"id": 146,
	"name": "recipe_manta"
},
{
	"id": 147,
	"name": "manta"
},
{
	"id": 148,
	"name": "recipe_lesser_crit"
},
{
	"id": 149,
	"name": "lesser_crit"
},
{
	"id": 150,
	"name": "recipe_armlet"
},
{
	"id": 151,
	"name": "armlet"
},
{
	"id": 183,
	"name": "recipe_invis_sword"
},
{
	"id": 152,
	"name": "invis_sword"
},
{
	"id": 153,
	"name": "recipe_sange_and_yasha"
},
{
	"id": 154,
	"name": "sange_and_yasha"
},
{
	"id": 155,
	"name": "recipe_satanic"
},
{
	"id": 156,
	"name": "satanic"
},
{
	"id": 157,
	"name": "recipe_mjollnir"
},
{
	"id": 158,
	"name": "mjollnir"
},
{
	"id": 159,
	"name": "recipe_skadi"
},
{
	"id": 160,
	"name": "skadi"
},
{
	"id": 161,
	"name": "recipe_sange"
},
{
	"id": 162,
	"name": "sange"
},
{
	"id": 163,
	"name": "recipe_helm_of_the_dominator"
},
{
	"id": 164,
	"name": "helm_of_the_dominator"
},
{
	"id": 165,
	"name": "recipe_maelstrom"
},
{
	"id": 166,
	"name": "maelstrom"
},
{
	"id": 167,
	"name": "recipe_desolator"
},
{
	"id": 168,
	"name": "desolator"
},
{
	"id": 169,
	"name": "recipe_yasha"
},
{
	"id": 170,
	"name": "yasha"
},
{
	"id": 171,
	"name": "recipe_mask_of_madness"
},
{
	"id": 172,
	"name": "mask_of_madness"
},
{
	"id": 173,
	"name": "recipe_diffusal_blade"
},
{
	"id": 195,
	"name": "recipe_diffusal_blade_2"
},
{
	"id": 174,
	"name": "diffusal_blade"
},
{
	"id": 196,
	"name": "diffusal_blade_2"
},
{
	"id": 175,
	"name": "recipe_ethereal_blade"
},
{
	"id": 176,
	"name": "ethereal_blade"
},
{
	"id": 177,
	"name": "recipe_soul_ring"
},
{
	"id": 178,
	"name": "soul_ring"
},
{
	"id": 179,
	"name": "recipe_arcane_boots"
},
{
	"id": 180,
	"name": "arcane_boots"
},
{
	"id": 181,
	"name": "orb_of_venom"
},
{
	"id": 184,
	"name": "recipe_ancient_janggo"
},
{
	"id": 185,
	"name": "ancient_janggo"
},
{
	"id": 186,
	"name": "recipe_medallion_of_courage"
},
{
	"id": 187,
	"name": "medallion_of_courage"
},
{
	"id": 188,
	"name": "smoke_of_deceit"
},
{
	"id": 189,
	"name": "recipe_veil_of_discord"
},
{
	"id": 190,
	"name": "veil_of_discord"
},
{
	"id": 205,
	"name": "recipe_rod_of_atos"
},
{
	"id": 206,
	"name": "rod_of_atos"
},
{
	"id": 207,
	"name": "recipe_abyssal_blade"
},
{
	"id": 208,
	"name": "abyssal_blade"
},
{
	"id": 209,
	"name": "recipe_heavens_halberd"
},
{
	"id": 210,
	"name": "heavens_halberd"
},
{
	"id": 211,
	"name": "recipe_ring_of_aquila"
},
{
	"id": 212,
	"name": "ring_of_aquila"
},
{
	"id": 213,
	"name": "recipe_tranquil_boots"
},
{
	"id": 214,
	"name": "tranquil_boots"
},
{
	"id": 215,
	"name": "shadow_amulet"
},
{
	"id": 216,
	"name": "enchanted_mango"
},
{
	"id": 218,
	"name": "ward_dispenser"
},
{
	"id": 220,
	"name": "travel_boots_2"
},
{
	"id": 226,
	"name": "lotus_orb"
},
{
	"id": 229,
	"name": "solar_crest"
},
{
	"id": 231,
	"name": "guardian_greaves"
},
{
	"id": 235,
	"name": "octarine_core"
},
{
	"id": 247,
	"name": "moon_shard"
},
{
	"id": 249,
	"name": "silver_edge"
},
{
	"id": 254,
	"name": "glimmer_cape"
},
{
	"id": 1000,
	"name": "halloween_candy_corn"
},
{
	"id": 1001,
	"name": "mystery_hook"
},
{
	"id": 1002,
	"name": "mystery_arrow"
},
{
	"id": 1003,
	"name": "mystery_missile"
},
{
	"id": 1004,
	"name": "mystery_toss"
},
{
	"id": 1005,
	"name": "mystery_vacuum"
},
{
	"id": 1006,
	"name": "halloween_rapier"
},
{
	"id": 1007,
	"name": "greevil_whistle"
},
{
	"id": 1008,
	"name": "greevil_whistle_toggle"
},
{
	"id": 1009,
	"name": "present"
},
{
	"id": 1010,
	"name": "winter_stocking"
},
{
	"id": 1011,
	"name": "winter_skates"
},
{
	"id": 1012,
	"name": "winter_cake"
},
{
	"id": 1013,
	"name": "winter_cookie"
},
{
	"id": 1014,
	"name": "winter_coco"
},
{
	"id": 1015,
	"name": "winter_ham"
},
{
	"id": 1016,
	"name": "winter_kringle"
},
{
	"id": 1017,
	"name": "winter_mushroom"
},
{
	"id": 1018,
	"name": "winter_greevil_treat"
},
{
	"id": 1019,
	"name": "winter_greevil_garbage"
},
{
	"id": 1020,
	"name": "winter_greevil_chewy"
},
{
	"id": 241,
	"name": "tango_single"
},
{
	"id": 242,
	"name": "crimson_guard"
},
{
	"id": 238,
	"name": "recipe_iron_talon"
},
{
	"id": 239,
	"name": "iron_talon"
},
{
	"id": 233,
	"name": "recipe_aether_lens"
},
{
	"id": 232,
	"name": "aether_lens"
},
{
	"id": 234,
	"name": "recipe_dragon_lance"
},
{
	"id": 236,
	"name": "dragon_lance"
},
{
	"id": 237,
	"name": "faerie_fire"
},
{
	"id": 244,
	"name": "wind_lace"
},
{
	"id": 245,
	"name": "recipe_bloodthorn"
},
{
	"id": 250,
	"name": "bloodthorn"
},
{
	"id": 251,
	"name": "recipe_echo_sabre"
},
{
	"id": 252,
	"name": "echo_sabre"
},
{
	"id": 257,
	"name": "tome_of_knowledge"
},
{
	"id": 262,
	"name": "recipe_hurricane_pike"
},
{
	"id": 263,
	"name": "hurricane_pike"
},
{
	"id": 240,
	"name": "blight_stone"
},
{
	"id": 265,
	"name": "infused_raindrop"
}
];

var heroAbilities = [
{
	"name": "death_prophet_spirit_siphon",
	"id": "5685"
},
{
	"name": "phoenix_launch_fire_spirit",
	"id": "5631"
},
{
	"name": "faceless_void_time_dilation",
	"id": "5691"
},
{
	"name": "centaur_khan_war_stomp",
	"id": "5295"
},
{
	"name": "necronomicon_warrior_last_will",
	"id": "5200"
},
{
	"name": "enigma_demonic_conversion",
	"id": "5147"
},
{
	"name": "beastmaster_boar_poison",
	"id": "5171"
},
{
	"name": "juggernaut_blade_fury",
	"id": "5028"
},
{
	"name": "witch_doctor_voodoo_restoration",
	"id": "5139"
},
{
	"name": "bloodseeker_blood_bath",
	"id": "5016"
},
{
	"name": "backdoor_protection_in_base",
	"id": "5351"
},
{
	"name": "broodmother_spawn_spiderite",
	"id": "5283"
},
{
	"name": "spirit_breaker_charge_of_darkness",
	"id": "5353"
},
{
	"name": "chaos_knight_reality_rift",
	"id": "5427"
},
{
	"name": "lina_laguna_blade",
	"id": "5043"
},
{
	"name": "riki_backstab",
	"id": "5144"
},
{
	"name": "forest_troll_high_priest_heal",
	"id": "5318"
},
{
	"name": "warlock_upheaval",
	"id": "5164"
},
{
	"name": "ogre_magi_frost_armor",
	"id": "5304"
},
{
	"name": "stats",
	"id": "5002"
},
{
	"name": "dazzle_poison_touch",
	"id": "5233"
},
{
	"name": "templar_assassin_self_trap",
	"id": "5199"
},
{
	"name": "silencer_glaives_of_wisdom",
	"id": "5378"
},
{
	"name": "warlock_rain_of_chaos",
	"id": "5165"
},
{
	"name": "sven_warcry",
	"id": "5096"
},
{
	"name": "templar_assassin_meld",
	"id": "5195"
},
{
	"name": "enchantress_impetus",
	"id": "5270"
},
{
	"name": "earthshaker_enchant_totem",
	"id": "5024"
},
{
	"name": "lone_druid_synergy",
	"id": "5414"
},
{
	"name": "invoker_forge_spirit",
	"id": "5387"
},
{
	"name": "chaos_knight_phantasm",
	"id": "5429"
},
{
	"name": "satyr_hellcaller_unholy_aura",
	"id": "5317"
},
{
	"name": "shadow_shaman_shackles",
	"id": "5080"
},
{
	"name": "ogre_magi_bloodlust",
	"id": "5440"
},
{
	"name": "shadow_demon_shadow_poison_release",
	"id": "5424"
},
{
	"name": "blue_dragonspawn_sorcerer_evasion",
	"id": "5325"
},
{
	"name": "antimage_mana_break",
	"id": "5003"
},
{
	"name": "spirit_breaker_empowering_haste",
	"id": "5354"
},
{
	"name": "satyr_hellcaller_shockwave",
	"id": "5316"
},
{
	"name": "morphling_morph_agi",
	"id": "5055"
},
{
	"name": "bounty_hunter_track",
	"id": "5288"
},
{
	"name": "bloodseeker_bloodrage",
	"id": "5015"
},
{
	"name": "obsidian_destroyer_astral_imprisonment",
	"id": "5392"
},
{
	"name": "lich_dark_ritual",
	"id": "5136"
},
{
	"name": "antimage_spell_shield",
	"id": "5005"
},
{
	"name": "enchantress_natures_attendants",
	"id": "5269"
},
{
	"name": "broodmother_incapacitating_bite",
	"id": "5281"
},
{
	"name": "undying_flesh_golem",
	"id": "5447"
},
{
	"name": "lone_druid_rabid",
	"id": "5413"
},
{
	"name": "slardar_sprint",
	"id": "5114"
},
{
	"name": "sandking_caustic_finale",
	"id": "5104"
},
{
	"name": "nevermore_dark_lord",
	"id": "5063"
},
{
	"name": "lycan_summon_wolves_invisibility",
	"id": "5500"
},
{
	"name": "life_stealer_infest",
	"id": "5252"
},
{
	"name": "lycan_feral_impulse",
	"id": "5397"
},
{
	"name": "ursa_overpower",
	"id": "5358"
},
{
	"name": "enraged_wildkin_toughness_aura",
	"id": "5313"
},
{
	"name": "pudge_flesh_heap",
	"id": "5074"
},
{
	"name": "witch_doctor_maledict",
	"id": "5140"
},
{
	"name": "vengefulspirit_nether_swap",
	"id": "5125"
},
{
	"name": "weaver_shukuchi",
	"id": "5290"
},
{
	"name": "weaver_the_swarm",
	"id": "5289"
},
{
	"name": "alchemist_acid_spray",
	"id": "5365"
},
{
	"name": "phantom_assassin_stifling_dagger",
	"id": "5190"
},
{
	"name": "sandking_epicenter",
	"id": "5105"
},
{
	"name": "tornado_tempest",
	"id": "5310"
},
{
	"name": "jakiro_liquid_fire",
	"id": "5299"
},
{
	"name": "chen_hand_of_god",
	"id": "5331"
},
{
	"name": "batrider_flaming_lasso",
	"id": "5323"
},
{
	"name": "lone_druid_true_form",
	"id": "5416"
},
{
	"name": "spirit_breaker_nether_strike",
	"id": "5356"
},
{
	"name": "spectre_haunt",
	"id": "5337"
},
{
	"name": "alchemist_chemical_rage",
	"id": "5369"
},
{
	"name": "silencer_last_word",
	"id": "5379"
},
{
	"name": "tinker_rearm",
	"id": "5153"
},
{
	"name": "rattletrap_rocket_flare",
	"id": "5239"
},
{
	"name": "omniknight_guardian_angel",
	"id": "5266"
},
{
	"name": "leshrac_diabolic_edict",
	"id": "5242"
},
{
	"name": "tiny_toss",
	"id": "5107"
},
{
	"name": "razor_static_link",
	"id": "5083"
},
{
	"name": "invoker_ice_wall",
	"id": "5389"
},
{
	"name": "brewmaster_drunken_haze",
	"id": "5401"
},
{
	"name": "batrider_flamebreak",
	"id": "5321"
},
{
	"name": "dark_seer_ion_shell",
	"id": "5256"
},
{
	"name": "queenofpain_scream_of_pain",
	"id": "5175"
},
{
	"name": "phantom_assassin_blur",
	"id": "5192"
},
{
	"name": "phantom_lancer_juxtapose",
	"id": "5067"
},
{
	"name": "tidehunter_anchor_smash",
	"id": "5120"
},
{
	"name": "axe_battle_hunger",
	"id": "5008"
},
{
	"name": "pugna_life_drain",
	"id": "5189"
},
{
	"name": "batrider_firefly",
	"id": "5322"
},
{
	"name": "beastmaster_primal_roar",
	"id": "5177"
},
{
	"name": "shadow_shaman_mass_serpent_ward",
	"id": "5081"
},
{
	"name": "treant_leech_seed",
	"id": "5435"
},
{
	"name": "chen_holy_persuasion",
	"id": "5330"
},
{
	"name": "courier_burst",
	"id": "5210"
},
{
	"name": "luna_lucent_beam",
	"id": "5222"
},
{
	"name": "morphling_morph_replicate",
	"id": "5058"
},
{
	"name": "venomancer_poison_sting",
	"id": "5179"
},
{
	"name": "roshan_bash",
	"id": "5214"
},
{
	"name": "tinker_march_of_the_machines",
	"id": "5152"
},
{
	"name": "lone_druid_spirit_bear_demolish",
	"id": "5420"
},
{
	"name": "mirana_leap",
	"id": "5050"
},
{
	"name": "brewmaster_storm_wind_walk",
	"id": "5410"
},
{
	"name": "skeleton_king_reincarnation",
	"id": "5089"
},
{
	"name": "beastmaster_call_of_the_wild",
	"id": "5169"
},
{
	"name": "riki_permanent_invisibility",
	"id": "5145"
},
{
	"name": "courier_shield",
	"id": "5209"
},
{
	"name": "clinkz_searing_arrows",
	"id": "5260"
},
{
	"name": "puck_illusory_orb",
	"id": "5069"
},
{
	"name": "forged_spirit_melting_strike",
	"id": "5388"
},
{
	"name": "viper_viper_strike",
	"id": "5221"
},
{
	"name": "furion_wrath_of_nature",
	"id": "5248"
},
{
	"name": "silencer_curse_of_the_silent",
	"id": "5377"
},
{
	"name": "lich_frost_nova",
	"id": "5134"
},
{
	"name": "doom_bringer_doom",
	"id": "5342"
},
{
	"name": "warlock_golem_flaming_fists",
	"id": "5166"
},
{
	"name": "invoker_quas",
	"id": "5370"
},
{
	"name": "invoker_invoke",
	"id": "5375"
},
{
	"name": "dazzle_weave",
	"id": "5236"
},
{
	"name": "courier_go_to_secretshop",
	"id": "5492"
},
{
	"name": "meepo_geostrike",
	"id": "5432"
},
{
	"name": "ogre_magi_multicast",
	"id": "5441"
},
{
	"name": "crystal_maiden_frostbite",
	"id": "5127"
},
{
	"name": "invoker_deafening_blast",
	"id": "5390"
},
{
	"name": "crystal_maiden_freezing_field",
	"id": "5129"
},
{
	"name": "lina_light_strike_array",
	"id": "5041"
},
{
	"name": "dragon_knight_breathe_fire",
	"id": "5226"
},
{
	"name": "earthshaker_fissure",
	"id": "5023"
},
{
	"name": "witch_doctor_paralyzing_cask",
	"id": "5138"
},
{
	"name": "centaur_khan_endurance_aura",
	"id": "5294"
},
{
	"name": "gyrocopter_homing_missile",
	"id": "5362"
},
{
	"name": "death_prophet_silence",
	"id": "5091"
},
{
	"name": "beastmaster_wild_axes",
	"id": "5168"
},
{
	"name": "doom_bringer_lvl_death",
	"id": "5341"
},
{
	"name": "queenofpain_shadow_strike",
	"id": "5173"
},
{
	"name": "tiny_avalanche",
	"id": "5106"
},
{
	"name": "invoker_exort",
	"id": "5372"
},
{
	"name": "lone_druid_true_form_battle_cry",
	"id": "5417"
},
{
	"name": "tiny_craggy_exterior",
	"id": "5108"
},
{
	"name": "antimage_mana_void",
	"id": "5006"
},
{
	"name": "riki_smoke_screen",
	"id": "5142"
},
{
	"name": "roshan_spell_block",
	"id": "5213"
},
{
	"name": "juggernaut_healing_ward",
	"id": "5029"
},
{
	"name": "ancient_apparition_ice_blast_release",
	"id": "5349"
},
{
	"name": "obsidian_destroyer_arcane_orb",
	"id": "5391"
},
{
	"name": "earthshaker_aftershock",
	"id": "5025"
},
{
	"name": "satyr_trickster_purge",
	"id": "5314"
},
{
	"name": "slardar_amplify_damage",
	"id": "5117"
},
{
	"name": "dazzle_shallow_grave",
	"id": "5234"
},
{
	"name": "tiny_grow",
	"id": "5109"
},
{
	"name": "shadow_demon_demonic_purge",
	"id": "5425"
},
{
	"name": "enigma_midnight_pulse",
	"id": "5148"
},
{
	"name": "treant_living_armor",
	"id": "5436"
},
{
	"name": "spectre_desolate",
	"id": "5335"
},
{
	"name": "weaver_time_lapse",
	"id": "5292"
},
{
	"name": "ancient_apparition_chilling_touch",
	"id": "5347"
},
{
	"name": "brewmaster_storm_cyclone",
	"id": "5409"
},
{
	"name": "vengefulspirit_command_aura",
	"id": "5123"
},
{
	"name": "broodmother_spawn_spiderlings",
	"id": "5279"
},
{
	"name": "bane_fiends_grip",
	"id": "5013"
},
{
	"name": "gyrocopter_flak_cannon",
	"id": "5363"
},
{
	"name": "sniper_take_aim",
	"id": "5156"
},
{
	"name": "sven_great_cleave",
	"id": "5095"
},
{
	"name": "death_prophet_exorcism",
	"id": "5093"
},
{
	"name": "mirana_arrow",
	"id": "5048"
},
{
	"name": "bounty_hunter_jinada",
	"id": "5286"
},
{
	"name": "pudge_rot",
	"id": "5076"
},
{
	"name": "chen_test_of_faith",
	"id": "5329"
},
{
	"name": "jakiro_ice_path",
	"id": "5298"
},
{
	"name": "enraged_wildkin_tornado",
	"id": "5312"
},
{
	"name": "pugna_decrepify",
	"id": "5187"
},
{
	"name": "dark_troll_warlord_raise_dead",
	"id": "5306"
},
{
	"name": "drow_ranger_trueshot",
	"id": "5021"
},
{
	"name": "vengefulspirit_wave_of_terror",
	"id": "5124"
},
{
	"name": "bounty_hunter_wind_walk",
	"id": "5287"
},
{
	"name": "nevermore_requiem",
	"id": "5064"
},
{
	"name": "courier_transfer_items",
	"id": "5206"
},
{
	"name": "viper_poison_attack",
	"id": "5218"
},
{
	"name": "brewmaster_fire_permanent_immolation",
	"id": "5411"
},
{
	"name": "alchemist_unstable_concoction",
	"id": "5366"
},
{
	"name": "undying_soul_rip",
	"id": "5443"
},
{
	"name": "roshan_devotion",
	"id": "5217"
},
{
	"name": "zuus_thundergods_wrath",
	"id": "5113"
},
{
	"name": "broodmother_spin_web",
	"id": "5280"
},
{
	"name": "jakiro_dual_breath",
	"id": "5297"
},
{
	"name": "luna_moon_glaive",
	"id": "5223"
},
{
	"name": "roshan_slam",
	"id": "5215"
},
{
	"name": "queenofpain_sonic_wave",
	"id": "5176"
},
{
	"name": "sniper_assassinate",
	"id": "5157"
},
{
	"name": "invoker_tornado",
	"id": "5382"
},
{
	"name": "dark_troll_warlord_ensnare",
	"id": "5305"
},
{
	"name": "courier_return_stash_items",
	"id": "5207"
},
{
	"name": "batrider_sticky_napalm",
	"id": "5320"
},
{
	"name": "ancient_apparition_ice_vortex",
	"id": "5346"
},
{
	"name": "windrunner_shackleshot",
	"id": "5130"
},
{
	"name": "lion_voodoo",
	"id": "5045"
},
{
	"name": "undying_decay",
	"id": "5442"
},
{
	"name": "tinker_heat_seeking_missile",
	"id": "5151"
},
{
	"name": "lion_mana_drain",
	"id": "5046"
},
{
	"name": "lone_druid_spirit_bear",
	"id": "5412"
},
{
	"name": "shadow_shaman_voodoo",
	"id": "5079"
},
{
	"name": "brewmaster_thunder_clap",
	"id": "5400"
},
{
	"name": "meepo_divided_we_stand",
	"id": "5433"
},
{
	"name": "big_thunder_lizard_frenzy",
	"id": "5333"
},
{
	"name": "luna_eclipse",
	"id": "5225"
},
{
	"name": "sandking_sand_storm",
	"id": "5103"
},
{
	"name": "giant_wolf_critical_strike",
	"id": "5307"
},
{
	"name": "brewmaster_storm_dispel_magic",
	"id": "5408"
},
{
	"name": "big_thunder_lizard_slam",
	"id": "5332"
},
{
	"name": "forest_troll_high_priest_mana_aura",
	"id": "5491"
},
{
	"name": "invoker_wex",
	"id": "5371"
},
{
	"name": "clinkz_wind_walk",
	"id": "5261"
},
{
	"name": "lone_druid_true_form",
	"id": "5415"
},
{
	"name": "undying_tombstone_zombie_deathstrike",
	"id": "5446"
},
{
	"name": "queenofpain_blink",
	"id": "5174"
},
{
	"name": "roshan_illusion_protection",
	"id": "5216"
},
{
	"name": "necronomicon_archer_aoe",
	"id": "5204"
},
{
	"name": "witch_doctor_death_ward",
	"id": "5141"
},
{
	"name": "enchantress_untouchable",
	"id": "5267"
},
{
	"name": "night_stalker_void",
	"id": "5275"
},
{
	"name": "faceless_void_time_lock",
	"id": "5184"
},
{
	"name": "faceless_void_backtrack",
	"id": "5183"
},
{
	"name": "polar_furbolg_ursa_warrior_thunder_clap",
	"id": "5302"
},
{
	"name": "slardar_bash",
	"id": "5116"
},
{
	"name": "omniknight_repel",
	"id": "5264"
},
{
	"name": "huskar_life_break",
	"id": "5274"
},
{
	"name": "spirit_breaker_greater_bash",
	"id": "5355"
},
{
	"name": "invoker_ghost_walk",
	"id": "5381"
},
{
	"name": "tidehunter_gush",
	"id": "5118"
},
{
	"name": "tidehunter_ravage",
	"id": "5121"
},
{
	"name": "lycan_summon_wolves",
	"id": "5395"
},
{
	"name": "drow_ranger_frost_arrows",
	"id": "5019"
},
{
	"name": "rattletrap_power_cogs",
	"id": "5238"
},
{
	"name": "chen_penitence",
	"id": "5328"
},
{
	"name": "skeleton_king_mortal_strike",
	"id": "5088"
},
{
	"name": "dazzle_shadow_wave",
	"id": "5235"
},
{
	"name": "sniper_headshot",
	"id": "5155"
},
{
	"name": "life_stealer_consume",
	"id": "5253"
},
{
	"name": "kunkka_x_marks_the_spot",
	"id": "5033"
},
{
	"name": "furion_teleportation",
	"id": "5246"
},
{
	"name": "brewmaster_drunken_brawler",
	"id": "5402"
},
{
	"name": "morphling_waveform",
	"id": "5052"
},
{
	"name": "morphling_replicate",
	"id": "5057"
},
{
	"name": "storm_spirit_static_remnant",
	"id": "5098"
},
{
	"name": "drow_ranger_marksmanship",
	"id": "5022"
},
{
	"name": "night_stalker_darkness",
	"id": "5278"
},
{
	"name": "windrunner_powershot",
	"id": "5131"
},
{
	"name": "venomancer_plague_ward",
	"id": "5180"
},
{
	"name": "invoker_sun_strike",
	"id": "5386"
},
{
	"name": "riki_blink_strike",
	"id": "5143"
},
{
	"name": "zuus_static_field",
	"id": "5112"
},
{
	"name": "pudge_meat_hook",
	"id": "5075"
},
{
	"name": "pugna_nether_ward",
	"id": "5188"
},
{
	"name": "treant_overgrowth",
	"id": "5437"
},
{
	"name": "zuus_lightning_bolt",
	"id": "5111"
},
{
	"name": "luna_lunar_blessing",
	"id": "5224"
},
{
	"name": "brewmaster_primal_split",
	"id": "5403"
},
{
	"name": "invoker_chaos_meteor",
	"id": "5385"
},
{
	"name": "ogre_magi_fireblast",
	"id": "5438"
},
{
	"name": "tidehunter_kraken_shell",
	"id": "5119"
},
{
	"name": "ursa_enrage",
	"id": "5360"
},
{
	"name": "lich_chain_frost",
	"id": "5137"
},
{
	"name": "razor_eye_of_the_storm",
	"id": "5085"
},
{
	"name": "ursa_fury_swipes",
	"id": "5359"
},
{
	"name": "juggernaut_omni_slash",
	"id": "5030"
},
{
	"name": "obsidian_destroyer_essence_aura",
	"id": "5393"
},
{
	"name": "warlock_shadow_word",
	"id": "5163"
},
{
	"name": "axe_berserkers_call",
	"id": "5007"
},
{
	"name": "dark_seer_wall_of_replica",
	"id": "5258"
},
{
	"name": "razor_unstable_current",
	"id": "5084"
},
{
	"name": "necrolyte_death_pulse",
	"id": "5158"
},
{
	"name": "necrolyte_reapers_scythe",
	"id": "5161"
},
{
	"name": "broodmother_insatiable_hunger",
	"id": "5282"
},
{
	"name": "templar_assassin_psi_blades",
	"id": "5196"
},
{
	"name": "pugna_nether_blast",
	"id": "5186"
},
{
	"name": "leshrac_pulse_nova",
	"id": "5244"
},
{
	"name": "doom_bringer_scorched_earth",
	"id": "5340"
},
{
	"name": "warlock_golem_permanent_immolation",
	"id": "5167"
},
{
	"name": "bloodseeker_thirst",
	"id": "5017"
},
{
	"name": "mirana_starfall",
	"id": "5051"
},
{
	"name": "viper_corrosive_skin",
	"id": "5220"
},
{
	"name": "kunkka_ghostship",
	"id": "5035"
},
{
	"name": "dark_seer_surge",
	"id": "5257"
},
{
	"name": "lone_druid_spirit_bear_return",
	"id": "5418"
},
{
	"name": "meepo_poof",
	"id": "5431"
},
{
	"name": "black_dragon_splash_attack",
	"id": "5324"
},
{
	"name": "rattletrap_battery_assault",
	"id": "5237"
},
{
	"name": "drow_ranger_silence",
	"id": "5020"
},
{
	"name": "nevermore_necromastery",
	"id": "5062"
},
{
	"name": "jakiro_macropyre",
	"id": "5300"
},
{
	"name": "lone_druid_spirit_bear_entangle",
	"id": "5419"
},
{
	"name": "treant_natures_guise",
	"id": "5434"
},
{
	"name": "beastmaster_greater_boar_poison",
	"id": "5352"
},
{
	"name": "tinker_laser",
	"id": "5150"
},
{
	"name": "clinkz_death_pact",
	"id": "5262"
},
{
	"name": "morphling_morph",
	"id": "5054"
},
{
	"name": "morphling_adaptive_strike",
	"id": "5053"
},
{
	"name": "mirana_invis",
	"id": "5049"
},
{
	"name": "enigma_malefice",
	"id": "5146"
},
{
	"name": "skeleton_king_hellfire_blast",
	"id": "5086"
},
{
	"name": "silencer_global_silence",
	"id": "5380"
},
{
	"name": "phantom_assassin_phantom_strike",
	"id": "5191"
},
{
	"name": "lycan_shapeshift",
	"id": "5398"
},
{
	"name": "templar_assassin_refraction",
	"id": "5194"
},
{
	"name": "warlock_fatal_bonds",
	"id": "5162"
},
{
	"name": "death_prophet_carrion_swarm",
	"id": "5090"
},
{
	"name": "lion_finger_of_death",
	"id": "5047"
},
{
	"name": "ursa_earthshock",
	"id": "5357"
},
{
	"name": "life_stealer_open_wounds",
	"id": "5251"
},
{
	"name": "blue_dragonspawn_overseer_evasion",
	"id": "5326"
},
{
	"name": "slardar_slithereen_crush",
	"id": "5115"
},
{
	"name": "razor_plasma_field",
	"id": "5082"
},
{
	"name": "storm_spirit_electric_vortex",
	"id": "5099"
},
{
	"name": "spectre_dispersion",
	"id": "5336"
},
{
	"name": "courier_return_to_base",
	"id": "5205"
},
{
	"name": "sven_gods_strength",
	"id": "5097"
},
{
	"name": "leshrac_lightning_storm",
	"id": "5243"
},
{
	"name": "life_stealer_rage",
	"id": "5249"
},
{
	"name": "spectre_reality",
	"id": "5338"
},
{
	"name": "antimage_blink",
	"id": "5004"
},
{
	"name": "sniper_shrapnel",
	"id": "5154"
},
{
	"name": "rattletrap_hookshot",
	"id": "5240"
},
{
	"name": "invoker_cold_snap",
	"id": "5376"
},
{
	"name": "crystal_maiden_crystal_nova",
	"id": "5126"
},
{
	"name": "bloodseeker_rupture",
	"id": "5018"
},
{
	"name": "kunkka_tidebringer",
	"id": "5032"
},
{
	"name": "invoker_alacrity",
	"id": "5384"
},
{
	"name": "huskar_inner_vitality",
	"id": "5271"
},
{
	"name": "axe_counter_helix",
	"id": "5009"
},
{
	"name": "spectre_spectral_dagger",
	"id": "5334"
},
{
	"name": "furion_force_of_nature",
	"id": "5247"
},
{
	"name": "brewmaster_earth_hurl_boulder",
	"id": "5404"
},
{
	"name": "alchemist_goblins_greed",
	"id": "5368"
},
{
	"name": "windrunner_windrun",
	"id": "5132"
},
{
	"name": "kunkka_return",
	"id": "5034"
},
{
	"name": "backdoor_protection",
	"id": "5350"
},
{
	"name": "dragon_knight_dragon_blood",
	"id": "5228"
},
{
	"name": "vengefulspirit_magic_missile",
	"id": "5122"
},
{
	"name": "phantom_lancer_spirit_lance",
	"id": "5065"
},
{
	"name": "nevermore_shadowraze1",
	"id": "5059"
},
{
	"name": "courier_take_stash_items",
	"id": "5208"
},
{
	"name": "nevermore_shadowraze2",
	"id": "5060"
},
{
	"name": "nevermore_shadowraze3",
	"id": "5061"
},
{
	"name": "weaver_geminate_attack",
	"id": "5291"
},
{
	"name": "alpha_wolf_command_aura",
	"id": "5309"
},
{
	"name": "ancient_apparition_ice_blast",
	"id": "5348"
},
{
	"name": "ogre_magi_ignite",
	"id": "5439"
},
{
	"name": "harpy_storm_chain_lightning",
	"id": "5319"
},
{
	"name": "omniknight_degen_aura",
	"id": "5265"
},
{
	"name": "enchantress_enchant",
	"id": "5268"
},
{
	"name": "leshrac_split_earth",
	"id": "5241"
},
{
	"name": "death_prophet_witchcraft",
	"id": "5092"
},
{
	"name": "viper_nethertoxin",
	"id": "5219"
},
{
	"name": "necrolyte_sadist",
	"id": "5160"
},
{
	"name": "phantom_assassin_coup_de_grace",
	"id": "5193"
},
{
	"name": "ancient_apparition_cold_feet",
	"id": "5345"
},
{
	"name": "puck_dream_coil",
	"id": "5073"
},
{
	"name": "venomancer_poison_nova",
	"id": "5181"
},
{
	"name": "chaos_knight_chaos_bolt",
	"id": "5426"
},
{
	"name": "doom_bringer_devour",
	"id": "5339"
},
{
	"name": "bounty_hunter_shuriken_toss",
	"id": "5285"
},
{
	"name": "blue_dragonspawn_overseer_devotion_aura",
	"id": "5327"
},
{
	"name": "earthshaker_echo_slam",
	"id": "5026"
},
{
	"name": "necronomicon_warrior_sight",
	"id": "5201"
},
{
	"name": "huskar_berserkers_blood",
	"id": "5273"
},
{
	"name": "templar_assassin_psionic_trap",
	"id": "5197"
},
{
	"name": "night_stalker_crippling_fear",
	"id": "5276"
},
{
	"name": "storm_spirit_overload",
	"id": "5100"
},
{
	"name": "alchemist_unstable_concoction_throw",
	"id": "5367"
},
{
	"name": "morphling_morph_str",
	"id": "5056"
},
{
	"name": "doom_bringer_empty",
	"id": "5343"
},
{
	"name": "doom_bringer_empty",
	"id": "5344"
},
{
	"name": "lycan_howl",
	"id": "5396"
},
{
	"name": "beastmaster_hawk_invisibility",
	"id": "5170"
},
{
	"name": "storm_spirit_ball_lightning",
	"id": "5101"
},
{
	"name": "omniknight_purification",
	"id": "5263"
},
{
	"name": "shadow_demon_shadow_poison",
	"id": "5423"
},
{
	"name": "dragon_knight_elder_dragon_form",
	"id": "5229"
},
{
	"name": "juggernaut_blade_dance",
	"id": "5027"
},
{
	"name": "shadow_demon_disruption",
	"id": "5421"
},
{
	"name": "venomancer_venomous_gale",
	"id": "5178"
},
{
	"name": "gnoll_assassin_envenomed_weapon",
	"id": "5296"
},
{
	"name": "alpha_wolf_critical_strike",
	"id": "5308"
},
{
	"name": "shadow_shaman_ether_shock",
	"id": "5078"
},
{
	"name": "night_stalker_hunter_in_the_night",
	"id": "5277"
},
{
	"name": "dragon_knight_dragon_tail",
	"id": "5227"
},
{
	"name": "gyrocopter_call_down",
	"id": "5364"
},
{
	"name": "beastmaster_inner_beast",
	"id": "5172"
},
{
	"name": "pudge_dismember",
	"id": "5077"
},
{
	"name": "windrunner_focusfire",
	"id": "5133"
},
{
	"name": "ghost_frost_attack",
	"id": "5301"
},
{
	"name": "bane_brain_sap",
	"id": "5011"
},
{
	"name": "necrolyte_heartstopper_aura",
	"id": "5159"
},
{
	"name": "chaos_knight_chaos_strike",
	"id": "5428"
},
{
	"name": "skeleton_king_vampiric_aura",
	"id": "5087"
},
{
	"name": "clinkz_strafe",
	"id": "5259"
},
{
	"name": "life_stealer_feast",
	"id": "5250"
},
{
	"name": "faceless_void_chronosphere",
	"id": "5185"
},
{
	"name": "lion_impale",
	"id": "5044"
},
{
	"name": "necronomicon_archer_mana_burn",
	"id": "5203"
},
{
	"name": "axe_culling_blade",
	"id": "5010"
},
{
	"name": "huskar_burning_spear",
	"id": "5272"
},
{
	"name": "brewmaster_earth_pulverize",
	"id": "5406"
},
{
	"name": "kobold_taskmaster_speed_aura",
	"id": "5293"
},
{
	"name": "brewmaster_earth_spell_immunity",
	"id": "5405"
},
{
	"name": "necronomicon_warrior_mana_burn",
	"id": "5202"
},
{
	"name": "furion_sprout",
	"id": "5245"
},
{
	"name": "invoker_empty2",
	"id": "5374"
},
{
	"name": "puck_ethereal_jaunt",
	"id": "5070"
},
{
	"name": "invoker_empty1",
	"id": "5373"
},
{
	"name": "kunkka_torrent",
	"id": "5031"
},
{
	"name": "phantom_lancer_doppelwalk",
	"id": "5066"
},
{
	"name": "undying_tombstone",
	"id": "5444"
},
{
	"name": "bane_nightmare",
	"id": "5014"
},
{
	"name": "zuus_arc_lightning",
	"id": "5110"
},
{
	"name": "undying_tombstone_zombie_aura",
	"id": "5445"
},
{
	"name": "crystal_maiden_brilliance_aura",
	"id": "5128"
},
{
	"name": "bane_enfeeble",
	"id": "5012"
},
{
	"name": "satyr_soulstealer_mana_burn",
	"id": "5315"
},
{
	"name": "gyrocopter_rocket_barrage",
	"id": "5361"
},
{
	"name": "dragon_knight_frost_breath",
	"id": "5232"
},
{
	"name": "invoker_emp",
	"id": "5383"
},
{
	"name": "shadow_demon_soul_catcher",
	"id": "5422"
},
{
	"name": "lina_fiery_soul",
	"id": "5042"
},
{
	"name": "lina_dragon_slave",
	"id": "5040"
},
{
	"name": "sven_storm_bolt",
	"id": "5094"
},
{
	"name": "broodmother_poison_sting",
	"id": "5284"
},
{
	"name": "meepo_earthbind",
	"id": "5430"
},
{
	"name": "phantom_lancer_phantom_edge",
	"id": "5068"
},
{
	"name": "puck_phase_shift",
	"id": "5072"
},
{
	"name": "faceless_void_time_walk",
	"id": "5182"
},
{
	"name": "puck_waning_rift",
	"id": "5071"
},
{
	"name": "lich_frost_armor",
	"id": "5135"
},
{
	"name": "sandking_burrowstrike",
	"id": "5102"
},
{
	"name": "dark_seer_vacuum",
	"id": "5255"
},
{
	"name": "obsidian_destroyer_sanity_eclipse",
	"id": "5394"
},
{
	"name": "enigma_black_hole",
	"id": "5149"
},
{
	"name": "lycan_summon_wolves_critical_strike",
	"id": "5399"
},
{
	"name": "default_attack",
	"id": "5001"
},
{
	"name": "templar_assassin_trap",
	"id": "5198"
},
{
	"name": "neutral_spell_immunity",
	"id": "5303"
},
{
	"name": "nyx_assassin_impale",
	"id": "5462"
},
{
	"name": "nyx_assassin_mana_burn",
	"id": "5463"
},
{
	"name": "nyx_assassin_spiked_carapace",
	"id": "5464"
},
{
	"name": "nyx_assassin_vendetta",
	"id": "5465"
},
{
	"name": "slark_dark_pact",
	"id": "5494"
},
{
	"name": "slark_pounce",
	"id": "5495"
},
{
	"name": "slark_essence_shift",
	"id": "5496"
},
{
	"name": "slark_shadow_dance",
	"id": "5497"
},
{
	"name": "medusa_split_shot",
	"id": "5504"
},
{
	"name": "medusa_mystic_snake",
	"id": "5505"
},
{
	"name": "medusa_mana_shield",
	"id": "5506"
},
{
	"name": "medusa_stone_gaze",
	"id": "5507"
},
{
	"name": "troll_warlord_berserkers_rage",
	"id": "5508"
},
{
	"name": "troll_warlord_whirling_axes_ranged",
	"id": "5509"
},
{
	"name": "troll_warlord_whirling_axes_melee",
	"id": "5510"
},
{
	"name": "troll_warlord_fervor",
	"id": "5511"
},
{
	"name": "troll_warlord_battle_trance",
	"id": "5512"
},
{
	"name": "centaur_hoof_stomp",
	"id": "5514"
},
{
	"name": "centaur_double_edge",
	"id": "5515"
},
{
	"name": "centaur_return",
	"id": "5516"
},
{
	"name": "centaur_stampede",
	"id": "5517"
},
{
	"name": "magnataur_shockwave",
	"id": "5518"
},
{
	"name": "magnataur_empower",
	"id": "5519"
},
{
	"name": "magnataur_skewer",
	"id": "5520"
},
{
	"name": "magnataur_reverse_polarity",
	"id": "5521"
},
{
	"name": "shredder_whirling_death",
	"id": "5524"
},
{
	"name": "shredder_timber_chain",
	"id": "5525"
},
{
	"name": "shredder_reactive_armor",
	"id": "5526"
},
{
	"name": "shredder_chakram",
	"id": "5527"
},
{
	"name": "shredder_return_chakram",
	"id": "5528"
},
{
	"name": "shredder_chakram_2",
	"id": "5645"
},
{
	"name": "shredder_return_chakram_2",
	"id": "5646"
},
{
	"name": "keeper_of_the_light_illuminate",
	"id": "5471"
},
{
	"name": "keeper_of_the_light_mana_leak",
	"id": "5472"
},
{
	"name": "keeper_of_the_light_chakra_magic",
	"id": "5473"
},
{
	"name": "keeper_of_the_light_spirit_form",
	"id": "5474"
},
{
	"name": "keeper_of_the_light_recall",
	"id": "5475"
},
{
	"name": "keeper_of_the_light_blinding_light",
	"id": "5476"
},
{
	"name": "keeper_of_the_light_illuminate_end",
	"id": "5477"
},
{
	"name": "keeper_of_the_light_spirit_form_illuminate",
	"id": "5479"
},
{
	"name": "keeper_of_the_light_spirit_form_illuminate_end",
	"id": "5503"
},
{
	"name": "rubick_telekinesis",
	"id": "5448"
},
{
	"name": "rubick_fade_bolt",
	"id": "5450"
},
{
	"name": "rubick_null_field",
	"id": "5451"
},
{
	"name": "rubick_spell_steal",
	"id": "5452"
},
{
	"name": "disruptor_thunder_strike",
	"id": "5458"
},
{
	"name": "disruptor_glimpse",
	"id": "5459"
},
{
	"name": "disruptor_kinetic_field",
	"id": "5460"
},
{
	"name": "disruptor_static_storm",
	"id": "5461"
},
{
	"name": "naga_siren_mirror_image",
	"id": "5467"
},
{
	"name": "naga_siren_ensnare",
	"id": "5468"
},
{
	"name": "naga_siren_rip_tide",
	"id": "5469"
},
{
	"name": "naga_siren_song_of_the_siren",
	"id": "5470"
},
{
	"name": "visage_grave_chill",
	"id": "5480"
},
{
	"name": "visage_soul_assumption",
	"id": "5481"
},
{
	"name": "visage_gravekeepers_cloak",
	"id": "5482"
},
{
	"name": "visage_summon_familiars",
	"id": "5483"
},
{
	"name": "wisp_tether",
	"id": "5485"
},
{
	"name": "wisp_spirits",
	"id": "5486"
},
{
	"name": "wisp_overcharge",
	"id": "5487"
},
{
	"name": "wisp_relocate",
	"id": "5488"
},
{
	"name": "wisp_tether_break",
	"id": "5489"
},
{
	"name": "wisp_spirits_in",
	"id": "5490"
},
{
	"name": "wisp_spirits_out",
	"id": "5493"
},
{
	"name": "bristleback_viscous_nasal_goo",
	"id": "5548"
},
{
	"name": "bristleback_quill_spray",
	"id": "5549"
},
{
	"name": "bristleback_bristleback",
	"id": "5550"
},
{
	"name": "bristleback_warpath",
	"id": "5551"
},
{
	"name": "tusk_ice_shards",
	"id": "5565"
},
{
	"name": "tusk_snowball",
	"id": "5566"
},
{
	"name": "tusk_frozen_sigil",
	"id": "5567"
},
{
	"name": "tusk_walrus_punch",
	"id": "5568"
},
{
	"name": "skywrath_mage_arcane_bolt",
	"id": "5581"
},
{
	"name": "skywrath_mage_concussive_shot",
	"id": "5582"
},
{
	"name": "skywrath_mage_ancient_seal",
	"id": "5583"
},
{
	"name": "skywrath_mage_mystic_flare",
	"id": "5584"
},
{
	"name": "abaddon_death_coil",
	"id": "5585"
},
{
	"name": "abaddon_aphotic_shield",
	"id": "5586"
},
{
	"name": "abaddon_frostmourne",
	"id": "5587"
},
{
	"name": "abaddon_borrowed_time",
	"id": "5588"
},
{
	"name": "elder_titan_echo_stomp",
	"id": "5589"
},
{
	"name": "elder_titan_ancestral_spirit",
	"id": "5591"
},
{
	"name": "elder_titan_natural_order",
	"id": "5593"
},
{
	"name": "elder_titan_earth_splitter",
	"id": "5594"
},
{
	"name": "legion_commander_overwhelming_odds",
	"id": "5595"
},
{
	"name": "legion_commander_press_the_attack",
	"id": "5596"
},
{
	"name": "legion_commander_moment_of_courage",
	"id": "5597"
},
{
	"name": "legion_commander_duel",
	"id": "5598"
},
{
	"name": "techies_land_mines",
	"id": "5599"
},
{
	"name": "techies_stasis_trap",
	"id": "5600"
},
{
	"name": "techies_suicide_squad_attack",
	"id": "5601"
},
{
	"name": "techies_remote_mines",
	"id": "5602"
},
{
	"name": "techies_focused_detonate",
	"id": "5635"
},
{
	"name": "techies_remote_mines_self_detonate",
	"id": "5636"
},
{
	"name": "techies_minefield_sign",
	"id": "5644"
},
{
	"name": "ember_spirit_searing_chains",
	"id": "5603"
},
{
	"name": "ember_spirit_sleight_of_fist",
	"id": "5604"
},
{
	"name": "ember_spirit_flame_guard",
	"id": "5605"
},
{
	"name": "ember_spirit_fire_remnant",
	"id": "5606"
},
{
	"name": "ember_spirit_activate_fire_remnant",
	"id": "5607"
},
{
	"name": "earth_spirit_boulder_smash",
	"id": "5608"
},
{
	"name": "earth_spirit_rolling_boulder",
	"id": "5609"
},
{
	"name": "earth_spirit_geomagnetic_grip",
	"id": "5610"
},
{
	"name": "earth_spirit_stone_caller",
	"id": "5611"
},
{
	"name": "earth_spirit_magnetize",
	"id": "5612"
},
{
	"name": "abyssal_underlord_firestorm",
	"id": "5613"
},
{
	"name": "abyssal_underlord_pit_of_malice",
	"id": "5614"
},
{
	"name": "abyssal_underlord_atrophy_aura",
	"id": "5615"
},
{
	"name": "abyssal_underlord_dark_rift",
	"id": "5616"
},
{
	"name": "terrorblade_reflection",
	"id": "5619"
},
{
	"name": "terrorblade_conjure_image",
	"id": "5620"
},
{
	"name": "terrorblade_metamorphosis",
	"id": "5621"
},
{
	"name": "terrorblade_sunder",
	"id": "5622"
},
{
	"name": "phoenix_icarus_dive",
	"id": "5623"
},
{
	"name": "phoenix_fire_spirits",
	"id": "5625"
},
{
	"name": "phoenix_sun_ray",
	"id": "5626"
},
{
	"name": "phoenix_supernova",
	"id": "5630"
},
{
	"name": "drow_ranger_wave_of_silence",
	"id": "5632"
},
{
	"name": "broodmother_spin_web_destroy",
	"id": "5643"
},
{
	"name": "earth_spirit_petrify",
	"id": "5648"
},
{
	"name": "treant_eyes_in_the_forest",
	"id": "5649"
},
{
	"name": "beastmaster_call_of_the_wild_boar",
	"id": "5580"
},
{
	"name": "life_stealer_control",
	"id": "5655"
},
{
	"name": "oracle_fortunes_end",
	"id": "5637"
},
{
	"name": "oracle_fates_edict",
	"id": "5638"
},
{
	"name": "oracle_purifying_flames",
	"id": "5639"
},
{
	"name": "oracle_false_promise",
	"id": "5640"
},
{
	"name": "winter_wyvern_arctic_burn",
	"id": "5651"
},
{
	"name": "winter_wyvern_splinter_blast",
	"id": "5652"
},
{
	"name": "winter_wyvern_cold_embrace",
	"id": "5653"
},
{
	"name": "winter_wyvern_winters_curse",
	"id": "5654"
}
];

//F:\Program Files\Steam\steamapps\common\dota 2 beta\game\dota\pak01_dir.vpk\root\resource\flash3\images\spellicons\abaddon_borrowed_time.png
//var urlTwo = 'https://api.opendota.com/api/heroes';
//.result.players["0"].hero_id

//http://cdn.dota2.com/apps/dota2/images/heroes/<name>_full.png HERO IMAGE URL

//players[0].hero_id

//["0"].all_word_counts

	/*fetch('https://api.opendota.com/api/matches/3941734536')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {*/
    //console.log(data);
    //console.log(data.map(a => a.match_id))
  
/*caches.open('test-cacheTwo')
	.then(cache => cache.add('http://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1?match_id=3940272063&key=E0CE6784F8D4FDC42D2411AF2AD73237')
		.then(cache.match('http://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1?match_id=3940272063&key=E0CE6784F8D4FDC42D2411AF2AD73237')
			.then(matchedResponse => console.log(matchedResponse))))
		


	//$.getJSON("C:/Users/shoty/db.json" , json => {
		//console.log(json.proMatches[0].players, json.proMatches[1].players, json.proMatches[2].players);
		/*var xx = json.proMatches[0];
		var yy = json.proMatches[1];
		var zy = json.proMatches[2];
		console.log(JSON.stringify(xx.players))*/



fetch('http://192.168.1.3:3000/api/v1/players')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);






    
   // localStorage.setItem('dataSixtyFour', JSON.stringify(zy))




//["0"].proMatchOne["0"].hero_id
	let oneHeroObj = heroInfo.find(x => x.id == data[0].proMatchOne[0].hero_id);
	let oneHeroImage = oneHeroObj.name.replace('npc_dota_hero_', '');
	$('.radiantOneImage').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/heroes/"+ oneHeroImage + "_lg.png'></img>");
	let twoHeroObj = heroInfo.find(x => x.id == data[0].proMatchOne[1].hero_id);
	let twoHeroImage = twoHeroObj.name.replace('npc_dota_hero_', '');
	$('.radiantTwoImage').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/heroes/"+ twoHeroImage + "_lg.png'></img>");
	let threeHeroObj = heroInfo.find(x => x.id == data[0].proMatchOne[2].hero_id);
	let threeHeroImage = threeHeroObj.name.replace('npc_dota_hero_', '');
	$('.radiantThreeImage').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/heroes/"+ threeHeroImage + "_lg.png'></img>");
	let fourHeroObj = heroInfo.find(x => x.id == data[0].proMatchOne[3].hero_id);
	let fourHeroImage = fourHeroObj.name.replace('npc_dota_hero_', '');
	$('.radiantFourImage').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/heroes/"+ fourHeroImage + "_lg.png'></img>");
	let fiveHeroObj = heroInfo.find(x => x.id == data[0].proMatchOne[4].hero_id);
	let fiveHeroImage = fiveHeroObj.name.replace('npc_dota_hero_', '');
	$('.radiantFiveImage').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/heroes/"+ fiveHeroImage + "_lg.png'></img>");

	let oneItemOne = itemId.find(x => x.id == data[0].proMatchOne[0].item_0);
	let oneItemTwo = itemId.find(x => x.id == data[0].proMatchOne[0].item_1);
	let oneItemThree = itemId.find(x => x.id == data[0].proMatchOne[0].item_2);
	let oneItemFour = itemId.find(x => x.id == data[0].proMatchOne[0].item_3);
	let oneItemFive = itemId.find(x => x.id == data[0].proMatchOne[0].item_4);
	let oneItemSix = itemId.find(x => x.id == data[0].proMatchOne[0].item_5);


	if(data[0].proMatchOne[0].item_0 == 0) {
		$('.oneItemOne').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.oneItemOne').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ oneItemOne.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[0].item_1 == 0) {
		$('.oneItemTwo').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.oneItemTwo').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ oneItemTwo.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[0].item_2 == 0) {
		$('.oneItemThree').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.oneItemThree').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ oneItemThree.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[0].item_3 == 0) {
		$('.oneItemFour').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.oneItemFour').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ oneItemFour.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[0].item_4 == 0) {
		$('.oneItemFive').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.oneItemFive').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ oneItemFive.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[0].item_5 == 0) {
		$('.oneItemSix').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.oneItemSix').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ oneItemSix.name +"_lg.png'></img>")
	}


	let twoItemOne = itemId.find(x => x.id == data[0].proMatchOne[1].item_0);
	let twoItemTwo = itemId.find(x => x.id == data[0].proMatchOne[1].item_1);
	let twoItemThree = itemId.find(x => x.id == data[0].proMatchOne[1].item_2);
	let twoItemFour = itemId.find(x => x.id == data[0].proMatchOne[1].item_3);
	let twoItemFive = itemId.find(x => x.id == data[0].proMatchOne[1].item_4);
	let twoItemSix = itemId.find(x => x.id == data[0].proMatchOne[1].item_5);





	if(data[0].proMatchOne[1].item_0 == 0) {
		$('.twoItemOne').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.twoItemOne').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ twoItemOne.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[1].item_1 == 0) {
		$('.twoItemTwo').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.twoItemTwo').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ twoItemTwo.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[1].item_2 == 0) {
		$('.twoItemThree').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.twoItemThree').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ twoItemThree.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[1].item_3 == 0) {
		$('.twoItemFour').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.twoItemFour').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ twoItemFour.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[1].item_4 == 0) {
		$('.twoItemFive').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.twoItemFive').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ twoItemFive.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[1].item_5 == 0) {
		$('.twoItemSix').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.twoItemSix').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ twoItemSix.name +"_lg.png'></img>")
	}




	let threeItemOne = itemId.find(x => x.id == data[0].proMatchOne[2].item_0);
	let threeItemTwo = itemId.find(x => x.id == data[0].proMatchOne[2].item_1);
	let threeItemThree = itemId.find(x => x.id == data[0].proMatchOne[2].item_2);
	let threeItemFour = itemId.find(x => x.id == data[0].proMatchOne[2].item_3);
	let threeItemFive = itemId.find(x => x.id == data[0].proMatchOne[2].item_4);
	let threeItemSix = itemId.find(x => x.id == data[0].proMatchOne[2].item_5);

	if(data[0].proMatchOne[2].item_0 == 0) {
		$('.threeItemOne').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.threeItemOne').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ threeItemOne.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[2].item_1 == 0) {
		$('.threeItemTwo').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.threeItemTwo').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ threeItemTwo.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[2].item_2 == 0) {
		$('.threeItemThree').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.threeItemThree').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ threeItemThree.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[2].item_3 == 0) {
		$('.threeItemFour').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.threeItemFour').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ threeItemFour.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[2].item_4 == 0) {
		$('.threeItemFive').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.threeItemFive').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ threeItemFive.name +"_lg.png'></img>")
	}	
	if(data[0].proMatchOne[2].item_5 == 0) {
		$('.threeItemSix').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.threeItemSix').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ threeItemSix.name +"_lg.png'></img>")
	}	

	let fourItemOne = itemId.find(x => x.id == data[0].proMatchOne[3].item_0);
	let fourItemTwo = itemId.find(x => x.id == data[0].proMatchOne[3].item_1);
	let fourItemThree = itemId.find(x => x.id == data[0].proMatchOne[3].item_2);
	let fourItemFour = itemId.find(x => x.id == data[0].proMatchOne[3].item_3);
	let fourItemFive = itemId.find(x => x.id == data[0].proMatchOne[3].item_4);
	let fourItemSix = itemId.find(x => x.id == data[0].proMatchOne[3].item_5);

	if(data[0].proMatchOne[3].item_0 == 0) {
		$('.fourItemOne').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.fourItemOne').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ fourItemOne.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[3].item_1 == 0) {
		$('.fourItemTwo').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.fourItemTwo').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ fourItemTwo.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[3].item_2 == 0) {
		$('.fourItemThree').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.fourItemThree').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ fourItemThree.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[3].item_3 == 0) {
		$('.fourItemFour').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.fourItemFour').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ fourItemFour.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[3].item_4 == 0) {
		$('.fourItemFive').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.fourItemFive').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ fourItemFive.name +"_lg.png'></img>")
	}	
	if(data[0].proMatchOne[3].item_5 == 0) {
		$('.fourItemSix').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.fourItemSix').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ fourItemSix.name +"_lg.png'></img>")
	}

	let fiveItemOne = itemId.find(x => x.id == data[0].proMatchOne[4].item_0);
	let fiveItemTwo = itemId.find(x => x.id == data[0].proMatchOne[4].item_1);
	let fiveItemThree = itemId.find(x => x.id == data[0].proMatchOne[4].item_2);
	let fiveItemFour = itemId.find(x => x.id == data[0].proMatchOne[4].item_3);
	let fiveItemFive = itemId.find(x => x.id == data[0].proMatchOne[4].item_4);
	let fiveItemSix = itemId.find(x => x.id == data[0].proMatchOne[4].item_5);

	if(data[0].proMatchOne[4].item_0 == 0) {
		$('.fiveItemOne').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.fiveItemOne').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ fiveItemOne.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[4].item_1 == 0) {
		$('.fiveItemTwo').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.fiveItemTwo').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ fiveItemTwo.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[4].item_2 == 0) {
		$('.fiveItemThree').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.fiveItemThree').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ fiveItemThree.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[4].item_3 == 0) {
		$('.fiveItemFour').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.fiveItemFour').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ fiveItemFour.name +"_lg.png'></img>")
	}
	if(data[0].proMatchOne[4].item_4 == 0) {
		$('.fiveItemFive').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.fiveItemFive').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ fiveItemFive.name +"_lg.png'></img>")
	}	
	if(data[0].proMatchOne[4].item_5 == 0) {
		$('.fiveItemSix').prepend("<img src='https://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg'></img>")
	}else{
		$('.fiveItemSix').prepend("<img src='http://cdn.dota2.com/apps/dota2/images/items/"+ fiveItemSix.name +"_lg.png'></img>")
	}

	//Radiant Player One Item Timings

	var aa = data[0].proMatchOne[0].purchase_log.filter(x => x.key == oneItemOne.name);
	var ab = data[0].proMatchOne[0].purchase_log.filter(x => x.key == oneItemTwo.name);
	var ac = data[0].proMatchOne[0].purchase_log.filter(x => x.key == oneItemThree.name);
	var ad = data[0].proMatchOne[0].purchase_log.filter(x => x.key == oneItemFour.name);
	var ae = data[0].proMatchOne[0].purchase_log.filter(x => x.key == oneItemFive.name);
	var af = data[0].proMatchOne[0].purchase_log.filter(x => x.key == oneItemSix.name);

	console.log(aa[0].time)

	

	console.log(ae, ad)
	if(aa === undefined || data[0].proMatchOne[0].item_0 == 0 || data[0].proMatchOne[0].item_0 == 33 || data[0].proMatchOne[0].item_0 == 117 || data[0].proMatchOne[0].item_0 ==260) {
		$('.oneItemOneTiming').append('<span></span>');
	}else if(data[0].proMatchOne[0].item_0 == 218) {
		zz = data[0].proMatchOne[0].purchase_log.filter(x => x.key === "ward_observer");
		$('.oneItemOneTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.oneItemOneTiming').append('<span>'+(aa[0].time / 60).toFixed(0)+'m</span>');
	}
	if(ab === undefined || data[0].proMatchOne[0].item_1 == 0 || data[0].proMatchOne[0].item_1 == 33 || data[0].proMatchOne[0].item_1 == 117 || data[0].proMatchOne[0].item_1 ==260) {
		$('.oneItemTwoTiming').append('<span></span>');
	}else if(ab[0] == aa[0]){
		$('.oneItemTwoTiming').append('<span>'+(ab[ab.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[0].item_1 == 218) {
		zz = data[0].proMatchOne[0].purchase.log.filter(x => x.key === "ward_observer");
		$('.oneItemTwoTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.oneItemTwoTiming').append('<span>'+(ab[0].time / 60).toFixed(0)+'m</span>');
	}
	if(ac === undefined || data[0].proMatchOne[0].item_2 == 0 || data[0].proMatchOne[0].item_2 == 33 || data[0].proMatchOne[0].item_2 == 117 || data[0].proMatchOne[0].item_2 ==260) {
		$('.oneItemThreeTiming').append('<span></span>');
	}else if(ac[0] == aa[0] || ac[0] == ab[0]){
		$('.oneItemThreeTiming').append('<span>'+(ac[ac.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[0].item_2 == 218) {
		zz = data[0].proMatchOne[0].purchase_log.filter(x => x.key === "ward_observer");
		$('.oneItemThreeTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.oneItemThreeTiming').append('<span>'+(ac[0].time / 60).toFixed(0)+'m</span>');
	}
	if(ad === undefined || data[0].proMatchOne[0].item_3 == 0 || data[0].proMatchOne[0].item_3 == 33 || data[0].proMatchOne[0].item_3 == 117 || data[0].proMatchOne[0].item_3 ==260) {
		$('.oneItemFourTiming').append('<span></span>');
	}else if(ad[0] == aa[0] || ad[0] == ab[0] || ad[0] == ac[0]){
		$('.oneItemFourTiming').append('<span>'+(ad[ad.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[0].item_3 == 218) {
		zz = data[0].proMatchOne[0].purchase_log.filter(x => x.key === "ward_observer");
		$('.oneItemFourTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.oneItemFourTiming').append('<span>'+(ad[0].time / 60).toFixed(0)+'m</span>');
	}
	if(ae === undefined || data[0].proMatchOne[0].item_4 == 0 || data[0].proMatchOne[0].item_4 == 33 || data[0].proMatchOne[0].item_4 == 117 || data[0].proMatchOne[0].item_4 ==260) {
		$('.oneItemFiveTiming').append('<span></span>');
	}else if(ae[0] == aa[0] || ae[0] == ab[0] || ae[0] == ac[0] || ae[0] == ad[0]){
		$('.oneItemFiveTiming').append('<span>'+(ae[ae.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[0].item_4 == 218) {
		zz = data[0].proMatchOne[0].purchase_log.filter(x => x.key === "ward_observer");
		$('.oneItemFiveTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.oneItemFiveTiming').append('<span>'+(ae[0].time / 60).toFixed(0)+'m</span>');
	}
	if(af === undefined || data[0].proMatchOne[0].item_5 == 0 || data[0].proMatchOne[0].item_5 == 33 || data[0].proMatchOne[0].item_5 == 117 || data[0].proMatchOne[0].item_5 ==260) {
		$('.oneItemSixTiming').append('<span></span>');
	}else if(af[0] == aa[0] || af[0] == ab[0] || af[0] == ac[0] || af[0] == ad[0] || af[0] == ae[0]){
		$('.oneItemSixTiming').append('<span>'+(af[af.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[0].item_5 == 218) {
		zz = data[0].proMatchOne[0].purchase_log.filter(x => x.key === "ward_observer");
		$('.oneItemSixTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.oneItemSixTiming').append('<span>'+(af[0].time / 60).toFixed(0)+'m</span>');
	}

	

	var ba = data[0].proMatchOne[1].purchase_log.filter(x => x.key == twoItemOne.name);
	var bb = data[0].proMatchOne[1].purchase_log.filter(x => x.key == twoItemTwo.name);
	var bc = data[0].proMatchOne[1].purchase_log.filter(x => x.key == twoItemThree.name);
	var bd = data[0].proMatchOne[1].purchase_log.filter(x => x.key == twoItemFour.name);
	var be = data[0].proMatchOne[1].purchase_log.filter(x => x.key == twoItemFive.name);
	var bf = data[0].proMatchOne[1].purchase_log.filter(x => x.key == twoItemSix.name);


	if(ba === undefined || data[0].proMatchOne[1].item_0 == 0 || data[0].proMatchOne[1].item_0 == 33 || data[0].proMatchOne[1].item_0 == 117 || data[0].proMatchOne[1].item_0 ==260) {
		$('.twoItemOneTiming').append('<span></span>');
	}else if(data[0].proMatchOne[1].item_0 == 218) {
		zz = data[0].proMatchOne[1].purchase_log.filter(x => x.key === "ward_observer");
		$('.twoItemOneTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.twoItemOneTiming').append('<span>'+(ba[0].time / 60).toFixed(0)+'m</span>');
	}
	if(bb === undefined || data[0].proMatchOne[1].item_1 == 0 || data[0].proMatchOne[1].item_1 == 33 || data[0].proMatchOne[1].item_1 == 117 || data[0].proMatchOne[1].item_1 ==260) {
		$('.twoItemTwoTiming').append('<span></span>');
	}else if(bb[0] == ba[0]){
		$('.twoItemTwoTiming').append('<span>'+(bb[bb.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[1].item_1 == 218) {
		zz = data[0].proMatchOne[1].purchase.log.filter(x => x.key === "ward_observer");
		$('.twoItemTwoTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.twoItemTwoTiming').append('<span>'+(bb[0].time / 60).toFixed(0)+'m</span>');
	}
	if(bc === undefined || data[0].proMatchOne[1].item_2 == 0 || data[0].proMatchOne[1].item_2 == 33 || data[0].proMatchOne[1].item_2 == 117 || data[0].proMatchOne[1].item_2 ==260) {
		$('.twoItemThreeTiming').append('<span></span>');
	}else if(bc[0] == ba[0] || bc[0] == bb[0]){
		$('.twoItemThreeTiming').append('<span>'+(bc[bc.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[1].item_2 == 218) {
		zz = data[0].proMatchOne[1].purchase_log.filter(x => x.key === "ward_observer");
		$('.twoItemThreeTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.twoItemThreeTiming').append('<span>'+(bc[0].time / 60).toFixed(0)+'m</span>');
	}
	if(bc === undefined || data[0].proMatchOne[1].item_3 == 0 || data[0].proMatchOne[1].item_3 == 33 || data[0].proMatchOne[1].item_3 == 117 || data[0].proMatchOne[1].item_3 ==260) {
		$('.twoItemFourTiming').append('<span></span>');
	}else if(bd[0] == ba[0] || bd[0] == bb[0] || bd[0] == bc[0]){
		$('.twoItemFourTiming').append('<span>'+(bd[bd.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[1].item_3 == 218) {
		zz = data[0].proMatchOne[1].purchase_log.filter(x => x.key === "ward_observer");
		$('.twoItemFourTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.twoItemFourTiming').append('<span>'+(bd[0].time / 60).toFixed(0)+'m</span>');
	}
	if(be === undefined || data[0].proMatchOne[1].item_4 == 0 || data[0].proMatchOne[1].item_4 == 33 || data[0].proMatchOne[1].item_4 == 117 || data[0].proMatchOne[1].item_4 ==260) {
		$('.twoItemFiveTiming').append('<span></span>');
	}else if(be[0] == ba[0] || be[0] == bb[0] || be[0] == bc[0] || be[0] == bc[0]){
		$('.twoItemFiveTiming').append('<span>'+(be[be.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[1].item_4 == 218) {
		zz = data[0].proMatchOne[1].purchase_log.filter(x => x.key === "ward_observer");
		$('.twoItemFiveTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.twoItemFiveTiming').append('<span>'+(be[0].time / 60).toFixed(0)+'m</span>');
	}
	if(bf === undefined || data[0].proMatchOne[1].item_5 == 0 || data[0].proMatchOne[1].item_5 == 33 || data[0].proMatchOne[1].item_5 == 117 || data[0].proMatchOne[1].item_5 ==260) {
		$('.twoItemSixTiming').append('<span></span>');
	}else if(bf[0] == ba[0] || bf[0] == bb[0] || bf[0] == bc[0] || bf[0] == bc[0] || bf[0] == be[0]){
		$('.twoItemSixTiming').append('<span>'+(bf[bf.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[1].item_5 == 218) {
		zz = data[0].proMatchOne[1].purchase_log.filter(x => x.key === "ward_observer");
		$('.twoItemSixTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.twoItemSixTiming').append('<span>'+(bf[0].time / 60).toFixed(0)+'m</span>');
	}



	var ca = data[0].proMatchOne[2].purchase_log.filter(x => x.key == threeItemOne.name);
	var cb = data[0].proMatchOne[2].purchase_log.filter(x => x.key == threeItemTwo.name);
	var cc = data[0].proMatchOne[2].purchase_log.filter(x => x.key == threeItemThree.name);
	var cd = data[0].proMatchOne[2].purchase_log.filter(x => x.key == threeItemFour.name);
	var ce = data[0].proMatchOne[2].purchase_log.filter(x => x.key == threeItemFive.name);
	var cf = data[0].proMatchOne[2].purchase_log.filter(x => x.key == threeItemSix.name);

	if(ca === undefined || data[0].proMatchOne[2].item_0 == 0 || data[0].proMatchOne[2].item_0 == 33 || data[0].proMatchOne[2].item_0 == 117 || data[0].proMatchOne[2].item_0 ==260) {
		$('.threeItemOneTiming').append('<span></span>');
	}else if(data[0].proMatchOne[2].item_0 == 218) {
		zz = data[0].proMatchOne[2].purchase_log.filter(x => x.key === "ward_observer");
		$('.threeItemOneTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.threeItemOneTiming').append('<span>'+(ca[0].time / 60).toFixed(0)+'m</span>');
	}
	if(cb === undefined || data[0].proMatchOne[2].item_1 == 0 || data[0].proMatchOne[2].item_1 == 33 || data[0].proMatchOne[2].item_1 == 117 || data[0].proMatchOne[2].item_1 ==260) {
		$('.threeItemTwoTiming').append('<span></span>');
	}else if(cb[0] == ca[0]){
		$('.threeItemTwoTiming').append('<span>'+(cb[cb.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[2].item_1 == 218) {
		zz = data[0].proMatchOne[2].purchase.log.filter(x => x.key === "ward_observer");
		$('.threeItemTwoTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.threeItemTwoTiming').append('<span>'+(cb[0].time / 60).toFixed(0)+'m</span>');
	}
	if(cc === undefined || data[0].proMatchOne[2].item_2 == 0 || data[0].proMatchOne[2].item_2 == 33 || data[0].proMatchOne[2].item_2 == 117 || data[0].proMatchOne[2].item_2 ==260) {
		$('.threeItemThreeTiming').append('<span></span>');
	}else if(cc[0] == ca[0] || cc[0] == cb[0]){
		$('.threeItemThreeTiming').append('<span>'+(cc[cc.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[2].item_2 == 218) {
		zz = data[0].proMatchOne[2].purchase_log.filter(x => x.key === "ward_observer");
		$('.threeItemThreeTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.threeItemThreeTiming').append('<span>'+(cc[0].time / 60).toFixed(0)+'m</span>');
	}
	if(cc === undefined || data[0].proMatchOne[2].item_3 == 0 || data[0].proMatchOne[2].item_3 == 33 || data[0].proMatchOne[2].item_3 == 117 || data[0].proMatchOne[2].item_3 ==260) {
		$('.threeItemFourTiming').append('<span></span>');
	}else if(cd[0] == ca[0] || cd[0] == cb[0] || cd[0] == cc[0]){
		$('.threeItemFourTiming').append('<span>'+(cd[cd.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[2].item_3 == 218) {
		zz = data[0].proMatchOne[2].purchase_log.filter(x => x.key === "ward_observer");
		$('.threeItemFourTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.threeItemFourTiming').append('<span>'+(cd[0].time / 60).toFixed(0)+'m</span>');
	}
	if(ce === undefined || data[0].proMatchOne[2].item_4 == 0 || data[0].proMatchOne[2].item_4 == 33 || data[0].proMatchOne[2].item_4 == 117 || data[0].proMatchOne[2].item_4 ==260) {
		$('.threeItemFiveTiming').append('<span></span>');
	}else if(ce[0] == ca[0] || ce[0] == cb[0] || ce[0] == cc[0] || ce[0] == cc[0]){
		$('.threeItemFiveTiming').append('<span>'+(ce[ce.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[2].item_4 == 218) {
		zz = data[0].proMatchOne[2].purchase_log.filter(x => x.key === "ward_observer");
		$('.threeItemFiveTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.threeItemFiveTiming').append('<span>'+(ce[0].time / 60).toFixed(0)+'m</span>');
	}
	if(cf === undefined || data[0].proMatchOne[2].item_5 == 0 || data[0].proMatchOne[2].item_5 == 33 || data[0].proMatchOne[2].item_5 == 117 || data[0].proMatchOne[2].item_5 ==260) {
		$('.threeItemSixTiming').append('<span></span>');
	}else if(cf[0] == ca[0] || cf[0] == cb[0] || cf[0] == cc[0] || cf[0] == cc[0] || cf[0]== ce[0]){
		$('.threeItemSixTiming').append('<span>'+(cf[cf.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[2].item_5 == 218) {
		zz = data[0].proMatchOne[2].purchase_log.filter(x => x.key === "ward_observer");
		$('.threeItemSixTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.threeItemSixTiming').append('<span>'+(cf[0].time / 60).toFixed(0)+'m</span>');
	}
	

	var da = data[0].proMatchOne[3].purchase_log.filter(x => x.key == fourItemOne.name);
	var db = data[0].proMatchOne[3].purchase_log.filter(x => x.key == fourItemTwo.name);
	var dc = data[0].proMatchOne[3].purchase_log.filter(x => x.key == fourItemThree.name);
	var dd = data[0].proMatchOne[3].purchase_log.filter(x => x.key == fourItemFour.name);
	var de = data[0].proMatchOne[3].purchase_log.filter(x => x.key == fourItemFive.name);
	var df = data[0].proMatchOne[3].purchase_log.filter(x => x.key == fourItemSix.name);
	

	console.log(da, db)

	if(da[0] == db[0]){
		console.log(true)
	}else{
		console.log(false)
	}


	if(da === undefined || data[0].proMatchOne[3].item_0 == 0 || data[0].proMatchOne[3].item_0 == 33 || data[0].proMatchOne[3].item_0 == 117 || data[0].proMatchOne[3].item_0 ==260) {
		$('.fourItemOneTiming').append('<span></span>');
	}else if(data[0].proMatchOne[3].item_0 == 218) {
		zz = data[0].proMatchOne[3].purchase_log.filter(x => x.key === "ward_observer");
		$('.fourItemOneTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.fourItemOneTiming').append('<span>'+(da[0].time / 60).toFixed(0)+'m</span>');
	}
	if(db === undefined || data[0].proMatchOne[3].item_1 == 0 || data[0].proMatchOne[3].item_1 == 33 || data[0].proMatchOne[3].item_1 == 117 || data[0].proMatchOne[3].item_1 ==260) {
		$('.fourItemTwoTiming').append('<span></span>');
	}else if(db[0] == da[0]){
		$('.fourItemTwoTiming').append('<span>'+(db[db.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[3].item_1 == 218) {
		zz = data[0].proMatchOne[3].purchase_log.filter(x => x.key === "ward_observer");
		$('.fourItemTwoTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.fourItemTwoTiming').append('<span>'+(db[0].time / 60).toFixed(0)+'m</span>');
	}
	if(dc === undefined || data[0].proMatchOne[3].item_2 == 0 || data[0].proMatchOne[3].item_2 == 33 || data[0].proMatchOne[3].item_2 == 117 || data[0].proMatchOne[3].item_2 ==260) {
		$('.fourItemThreeTiming').append('<span></span>');
	}else if(dc[0] == da[0] || dc[0] == db[0]){
		$('.fourItemThreeTiming').append('<span>'+(dc[dc.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[3].item_2 == 218) {
		zz = data[0].proMatchOne[3].purchase_log.filter(x => x.key === "ward_observer");
		$('.fourItemThreeTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.fourItemThreeTiming').append('<span>'+(dc[0].time / 60).toFixed(0)+'m</span>');
	}
	if(dd === undefined || data[0].proMatchOne[3].item_3 == 0 || data[0].proMatchOne[3].item_3 == 33 || data[0].proMatchOne[3].item_3 == 117 || data[0].proMatchOne[3].item_3 ==260) {
		$('.fourItemFourTiming').append('<span></span>');
	}else if(dd[0] == da[0] || dd[0] == db[0] || dd[0] == dc[0]){
		$('fourItemFourTiming').append('<span>'+(dd[dd.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[3].item_3 == 218) {
		zz = data[0].proMatchOne[3].purchase_log.filter(x => x.key === "ward_observer");
		$('.fourItemFourTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.fourItemFourTiming').append('<span>'+(dd[0].time / 60).toFixed(0)+'m</span>');
	}


	if(de === undefined || data[0].proMatchOne[3].item_4 == 0 || data[0].proMatchOne[3].item_4 == 33 || data[0].proMatchOne[3].item_4 == 117 || data[0].proMatchOne[3].item_4 ==260) {
		$('.fourItemFiveTiming').append('<span></span>');
	}else if(de[0] == da[0] || de[0] == db[0] || de[0] == dc[0] || de[0] == dd[0]){
		$('.fourItemFiveTiming').append('<span>'+(de[de.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[3].item_4 == 218) {
		zz = data[0].proMatchOne[3].purchase_log.filter(x => x.key === "ward_observer");
		$('.fourItemFiveTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.fourItemFiveTiming').append('<span>'+(de[0].time / 60).toFixed(0)+'m</span>');
	}


	if(df === undefined || data[0].proMatchOne[3].item_5 == 0 || data[0].proMatchOne[3].item_5 == 33 || data[0].proMatchOne[3].item_5 == 117 || data[0].proMatchOne[3].item_5 ==260) {
		$('.fourItemSixTiming').append('<span></span>');
	}else if(df[0] == da[0] || df[0] == db[0] || df[0] == dc[0] || df[0] == dd[0] || df[0] == de[0]){
		$('.fourItemSixTiming').append('<span>'+(df[df.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[3].item_5 == 218) {
		zz = data[0].proMatchOne[3].purchase_log.filter(x => x.key === "ward_observer");
		$('.fourItemSixTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.fourItemSixTiming').append('<span>'+(df[0].time / 60).toFixed(0)+'m</span>');
	}




	var ea = data[0].proMatchOne[4].purchase_log.filter(x => x.key == fiveItemOne.name);
	var eb = data[0].proMatchOne[4].purchase_log.filter(x => x.key == fiveItemTwo.name);
	var ec = data[0].proMatchOne[4].purchase_log.filter(x => x.key == fiveItemThree.name);
	var ed = data[0].proMatchOne[4].purchase_log.filter(x => x.key == fiveItemFour.name);
	var ee = data[0].proMatchOne[4].purchase_log.filter(x => x.key == fiveItemFive.name);
	var ef = data[0].proMatchOne[4].purchase_log.filter(x => x.key == fiveItemSix.name);

	if(ea === undefined || data[0].proMatchOne[4].item_0 == 0 || data[0].proMatchOne[4].item_0 == 33 || data[0].proMatchOne[4].item_0 == 117 || data[0].proMatchOne[4].item_0 ==260) {
		$('.fiveItemOneTiming').append('<span></span>');
	}else if(data[0].proMatchOne[4].item_0 == 218) {
		zz = data[0].proMatchOne[4].purchase_log.filter(x => x.key === "ward_observer");
		$('.fiveItemOneTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.fiveItemOneTiming').append('<span>'+(ea[0].time / 60).toFixed(0)+'m</span>');
	}
	if(eb === undefined || data[0].proMatchOne[4].item_1 == 0 || data[0].proMatchOne[4].item_1 == 33 || data[0].proMatchOne[4].item_1 == 117 || data[0].proMatchOne[4].item_1 ==260) {
		$('.fiveItemTwoTiming').append('<span></span>');
	}else if(eb[0] == ea[0]){
		$('.fiveItemTwoTiming').append('<span>'+(eb[eb.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[4].item_1 == 218) {
		zz = data[0].proMatchOne[4].purchase_log.filter(x => x.key === "ward_observer");
		$('.fiveItemTwoTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.fiveItemTwoTiming').append('<span>'+(eb[0].time / 60).toFixed(0)+'m</span>');
	}
	if(ec === undefined || data[0].proMatchOne[4].item_2 == 0 || data[0].proMatchOne[4].item_2 == 33 || data[0].proMatchOne[4].item_2 == 117 || data[0].proMatchOne[4].item_2 ==260) {
		$('.fiveItemThreeTiming').append('<span></span>');
	}else if(data[0].proMatchOne[4].item_2 == 218) {
		zz = data[0].proMatchOne[4].purchase_log.filter(x => x.key === "ward_observer");
		$('.fiveItemThreeTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else if(ec[0] == ea[0] || ec[0] == eb[0]){
		$('.fiveItemThreeTiming').append('<span>'+(ec[ec.length - 1].time / 60).toFixed(0)+'m</span>')
	}else { 
		$('.fiveItemThreeTiming').append('<span>'+(ec[0].time / 60).toFixed(0)+'m</span>');
	}
	if(ed === undefined || data[0].proMatchOne[4].item_3 == 0 || data[0].proMatchOne[4].item_3 == 33 || data[0].proMatchOne[4].item_3 == 117 || data[0].proMatchOne[4].item_3 ==260) {
		$('.fiveItemFourTiming').append('<span></span>');
	}else if(ed[0] == ea[0] || ed[0] == eb[0] || ed[0] == ec[0]){
		$('.fiveItemFourTiming').append('<span>'+(ed[ed.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[4].item_3 == 218) {
		zz = data[0].proMatchOne[4].purchase_log.filter(x => x.key === "ward_observer");
		$('.fiveItemFourTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.fiveItemFourTiming').append('<span>'+(ed[0].time / 60).toFixed(0)+'m</span>');
	}
	if(ee === undefined || data[0].proMatchOne[4].item_4 == 0 || data[0].proMatchOne[4].item_4 == 33 || data[0].proMatchOne[4].item_4 == 117 || data[0].proMatchOne[4].item_4 ==260) {
		$('.fiveItemFiveTiming').append('<span></span>');
	}else if(ee[0] == ea[0] || ee[0] == eb[0] || ee[0] == ec[0] || ee[0] == ed[0]){
		$('.fiveItemFiveTiming').append('<span>'+(ee[ee.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[4].item_4 == 218) {
		zz = data[0].proMatchOne[4].purchase_log.filter(x => x.key === "ward_observer");
		$('.fiveItemFiveTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.fiveItemFiveTiming').append('<span>'+(ee[0].time / 60).toFixed(0)+'m</span>');
	}
	if(ef === undefined || data[0].proMatchOne[4].item_5 == 0 || data[0].proMatchOne[4].item_5 == 33 || data[0].proMatchOne[4].item_5 == 117 || data[0].proMatchOne[4].item_5 ==260) {
		$('.fiveItemSixTiming').append('<span></span>');
	}else if(ef[0] == ea[0] || ef[0] == eb[0] || ef[0] == ec[0] || ef[0] == ed[0] || ef[0] == ee[0]){
		$('.fiveItemSixTiming').append('<span>'+(ef[ef.length - 1].time / 60).toFixed(0)+'m</span>')
	}else if(data[0].proMatchOne[4].item_5 == 218) {
		zz = data[0].proMatchOne[4].purchase_log.filter(x => x.key === "ward_observer");
		$('.fiveItemSixTiming').append('<span>'+(zz[zz.length - 1].time / 60).toFixed(0)+'m</span>');
	}else {
		$('.fiveItemSixTiming').append('<span>'+(ef[0].time / 60).toFixed(0)+'m</span>');
	}

	//RADIANT KILLS NUMBER
	$('.playerOneKills').append('<span>'+data[0].proMatchOne["0"].kills+'</span>')
	$('.playerTwoKills').append('<span>'+data[0].proMatchOne["1"].kills+'</span>')
	$('.playerThreeKills').append('<span>'+data[0].proMatchOne["2"].kills+'</span>')
	$('.playerFourKills').append('<span>'+data[0].proMatchOne["3"].kills+'</span>')
	$('.playerFiveKills').append('<span>'+data[0].proMatchOne["4"].kills+'</span>')

	//RADIANT DEATHS NUMBER
	$('.playerOneDeaths').append('<span>'+data[0].proMatchOne["0"].deaths+'</span>')
	$('.playerTwoDeaths').append('<span>'+data[0].proMatchOne["1"].deaths+'</span>')
	$('.playerThreeDeaths').append('<span>'+data[0].proMatchOne["2"].deaths+'</span>')
	$('.playerFourDeaths').append('<span>'+data[0].proMatchOne["3"].deaths+'</span>')
	$('.playerFiveDeaths').append('<span>'+data[0].proMatchOne["4"].deaths+'</span>')
	
	//RADIANT ASSISTS NUMBER
	$('.playerOneAssists').append('<span>'+data[0].proMatchOne["0"].assists+'</span>')
	$('.playerTwoAssists').append('<span>'+data[0].proMatchOne["1"].assists+'</span>')
	$('.playerThreeAssists').append('<span>'+data[0].proMatchOne["2"].assists+'</span>')
	$('.playerFourAssists').append('<span>'+data[0].proMatchOne["3"].assists+'</span>')
	$('.playerFiveAssists').append('<span>'+data[0].proMatchOne["4"].assists+'</span>')


})


/*result = fetch(urlMatchHistoryTwo, {
	method: 'get',
}).then(function(response) {
    return response.json(); // pass the data as promise to next then block
}).then(function(data) {
	console.log(data[3].match_id)
	result = fetch(`https://api.opendota.com/api/matches/${data[58].match_id}`, {
		method: 'get',
	}).then(function(response) {
    return response.json(); // pass the data as promise to next then block
}).then(function(data) {


	
	
	localStorage.setItem('dataFour', JSON.stringify(data));
})
;
});

//data.players[0].purchase_log.key / time
		/*let abilityOne = heroAbilities.find(x => x.id == data.players[i].ability_upgrades_arr[0]);
		let abilityTwo = heroAbilities.find(x => x.id == data.players[i].ability_upgrades_arr[1]);
		let abilityThree = heroAbilities.find(x => x.id == data.players[i].ability_upgrades_arr[2]);
		let abilityFour = heroAbilities.find(x => x.id == data.players[i].ability_upgrades_arr[3]);
		let abilityFive = heroAbilities.find(x => x.id == data.players[i].ability_upgrades_arr[4]);
		let abilitySix = heroAbilities.find(x => x.id == data.players[i].ability_upgrades_arr[5]);
		let abilitySeven = heroAbilities.find(x => x.id == data.players[i].ability_upgrades_arr[6]);
		let abilityEight = heroAbilities.find(x => x.id == data.players[i].ability_upgrades_arr[7]);
		var img = document.createElement("img");
		img.src = `C:/New folder/spellicons/${abilityOne.name}.png`;
		var src = document.getElementById("abilityOne");
		src.appendChild(img);

		if(newTestItemTime == undefined) {
			document.getElementById('itemOneTiming').innerHTML = '0m';
		} else {
			var txt = document.createElement("p");
			txt.src = 'hello';
			var src = document.getElementById("itemOneTiming");
			src.appendChild(txt);
		};
		if(newTestItemTimeTwo == undefined) {
			console.log('0m');
		} else {
			var txt = document.createElement("p");
			txt.src = newTestItemTimeTwo.time;
			var src = document.getElementById("itemTwoTiming");
			src.appendChild(txt);
		};
		if(newTestItemTimeThree == undefined) {
			console.log('0m');
		} else {
			var txt = document.createElement("p");
			txt.src = newTestItemTimeThree.time;
			var src = document.getElementById("itemThreeTiming");
			src.appendChild(txt);
		};
		if(newTestItemTimeFour == undefined) {
			console.log('0m');
		} else {
			var txt = document.createElement("p");
			txt.src = newTestItemTimeFour.time;
			var src = document.getElementById("itemFourTiming");
			src.appendChild(txt);
		};
		if(newTestItemTimeFive == undefined) {
			console.log('0m');
		} else {
			document.getElementById('itemFiveTiming').innerHTML = newTestItemTimeFive.time;
		};
		if(newTestItemTimeSix == undefined) {
			console.log('0m');
		} else {
			document.getElementById('itemSixTiming').innerHTML = newTestItemTimeSix.time;
		};

		var img = document.createElement("img");
		img.src = `C:/New folder/spellicons/${abilityTwo.name}.png`;
		var src = document.getElementById("abilityTwo");
		src.appendChild(img);
		var img = document.createElement("img");
		img.src = `C:/New folder/spellicons/${abilityThree.name}.png`;
		var src = document.getElementById("abilityThree");
		src.appendChild(img);
		var img = document.createElement("img");
		img.src = `C:/New folder/spellicons/${abilityFour.name}.png`;
		var src = document.getElementById("abilityFour");
		src.appendChild(img);
		var img = document.createElement("img");
		img.src = `C:/New folder/spellicons/${abilityFive.name}.png`;
		var src = document.getElementById("abilityFive");
		src.appendChild(img);
		var img = document.createElement("img");
		img.src = `C:/New folder/spellicons/${abilitySix.name}.png`;
		var src = document.getElementById("abilitySix");
		src.appendChild(img);
		var img = document.createElement("img");
		img.src = `C:/New folder/spellicons/${abilitySeven.name}.png`;
		var src = document.getElementById("abilitySeven");
		src.appendChild(img);

	};
	});
});
*/

/*result = fetch('https://api.opendota.com/api/heroes', {
	method: 'get',
}).then(function(response) {
    return response.json(); // pass the data as promise to next then block
}).then(function(data) {
	var objOne = data.find(x => x.localized_name == 'Morphling');
	var heroId = objOne.id;

	result = fetch(`https://api.opendota.com/api/scenarios/itemTimings?hero_id=${heroId}`, {
		method: 'get',
	}).then(function(response) {
    return response.json(); // pass the data as promise to next then block
}).then(function(data) {
	var filteredOne = data.filter(function(item) {
		return item.time == 450;
	})
	var filteredTwo = data.filter(function(item) {
		return item.time == 600;
	})
	var filteredThree = data.filter(function(item) {
		return item.time == 720;
	})
	var filteredFour = data.filter(function(item) {
		return item.time == 900;
	})

	var maxOne = Math.max.apply(Math,filteredOne.map(function(o){return o.games;}));
	let objOne = filteredOne.find(x => x.games == maxOne);
	var maxTwo = Math.max.apply(Math,filteredTwo.map(function(o){return o.games;}));
	let objTwo = filteredTwo.find(x => x.games == maxTwo);
	var maxThree = Math.max.apply(Math,filteredThree.map(function(o){return o.games;}));
	let objThree = filteredThree.find(x => x.games == maxThree);
	var maxFour = Math.max.apply(Math,filteredFour.map(function(o){return o.games;}));
	let objFour = filteredFour.find(x => x.games == maxFour);
	console.log(`7.5 minutes ${objOne.item}`);
	console.log(`10 minutes ${objTwo.item}`);
	console.log(`12 minutes ${objThree.item}`);
	console.log(`15 minutes ${objFour.item}`);

	
});

});


/*result = fetch(url, {
	method: 'get',
}).then(function(response) {
    return response.json(); // pass the data as promise to next then block
}).then(function(data) {
	var filteredOne = data.filter(function(item) {
		return item.time == 450;
	})
	var filteredTwo = data.filter(function(item) {
		return item.time == 600;
	})
	var filteredThree = data.filter(function(item) {
		return item.time == 720;
	})
	var filteredFour = data.filter(function(item) {
		return item.time == 900;
	})

	var maxOne = Math.max.apply(Math,filteredOne.map(function(o){return o.games;}));
	let objOne = filteredOne.find(x => x.games == maxOne);
	var maxTwo = Math.max.apply(Math,filteredTwo.map(function(o){return o.games;}));
	let objTwo = filteredTwo.find(x => x.games == maxTwo);
	var maxThree = Math.max.apply(Math,filteredThree.map(function(o){return o.games;}));
	let objThree = filteredThree.find(x => x.games == maxThree);
	var maxFour = Math.max.apply(Math,filteredFour.map(function(o){return o.games;}));
	let objFour = filteredFour.find(x => x.games == maxFour);

	//winPercent = ((filteredData[8].wins / filteredData[8].games) * 100).toFixed(0);
	//winPercentTwo = ((filteredData[4].wins / filteredData[4].games) * 100).toFixed(0);
	//console.log(filteredData[8].item, `${winPercent}%`);
	//console.log(objOne);
	//console.log(objTwo);
	//console.log(objThree);
	//console.log(objFour);
	//console.log(max);
	console.log(filteredData);
	console.log(filteredData[3].item, `${winPercent}%`);
	console.log(filteredData[4].item, `${winPercentTwo}%`);
	console.log(`${winPercent}%`, `${winPercentTwo}%`);
}

);*/
//[16]
//log( ( (wins / games) * 100) .method );

