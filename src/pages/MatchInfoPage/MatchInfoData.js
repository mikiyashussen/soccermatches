const MatchData = {
    "generated_at": "2022-02-03T03:38:14+00:00",
    "sport_event": {
        "id": "sr:sport_event:22974691",
        "start_time": "2021-05-16T15:30:00+00:00",
        "start_time_confirmed": true,
        "sport_event_context": {
            "sport": {
                "id": "sr:sport:1",
                "name": "Soccer"
            },
            "category": {
                "id": "sr:category:47",
                "name": "Poland",
                "country_code": "POL"
            },
            "competition": {
                "id": "sr:competition:202",
                "name": "Ekstraklasa",
                "gender": "men"
            },
            "season": {
                "id": "sr:season:77453",
                "name": "Ekstraklasa 20\/21",
                "start_date": "2020-08-21",
                "end_date": "2021-05-16",
                "year": "20\/21",
                "competition_id": "sr:competition:202"
            },
            "stage": {
                "order": 1,
                "type": "league",
                "phase": "regular season",
                "start_date": "2020-08-21",
                "end_date": "2021-05-16",
                "year": "20\/21"
            },
            "round": {
                "number": 30
            },
            "groups": [{
                "id": "sr:league:50999",
                "name": "Ekstraklasa 20\/21"
            }]
        },
        "coverage": {
            "type": "sport_event",
            "sport_event_properties": {
                "lineups": true,
                "extended_player_stats": false,
                "extended_team_stats": false,
                "lineups_availability": "pre",
                "ballspotting": true,
                "commentary": true,
                "fun_facts": true,
                "goal_scorers": true,
                "scores": "live",
                "game_clock": true,
                "deeper_play_by_play": true,
                "deeper_player_stats": true,
                "deeper_team_stats": true,
                "basic_play_by_play": true,
                "basic_player_stats": true,
                "basic_team_stats": true
            }
        },
        "competitors": [{
            "id": "sr:competitor:4901",
            "name": "MKS Cracovia Krakow",
            "country": "Poland",
            "country_code": "POL",
            "abbreviation": "CRA",
            "qualifier": "home",
            "gender": "male"
        }, {
            "id": "sr:competitor:7922",
            "name": "KS Warta Poznan",
            "country": "Poland",
            "country_code": "POL",
            "abbreviation": "WAR",
            "qualifier": "away",
            "gender": "male"
        }],
        "venue": {
            "id": "sr:venue:2348",
            "name": "Marshal Jozef Pilsudski Stadium",
            "capacity": 15016,
            "city_name": "Krakow",
            "country_name": "Poland",
            "map_coordinates": "50.057969,19.920182",
            "country_code": "POL"
        },
        "sport_event_conditions": {
            "referees": [{
                "id": "sr:referee:290089",
                "name": "Malec, Pawel",
                "nationality": "Poland",
                "country_code": "POL",
                "type": "main_referee"
            }],
            "ground": {
                "neutral": false
            }
        }
    },
    "sport_event_status": {
        "status": "closed",
        "match_status": "ended",
        "home_score": 0,
        "away_score": 1,
        "winner_id": "sr:competitor:7922",
        "period_scores": [{
            "home_score": 0,
            "away_score": 0,
            "type": "regular_period",
            "number": 1
        }, {
            "home_score": 0,
            "away_score": 1,
            "type": "regular_period",
            "number": 2
        }],
        "ball_locations": [{
            "order": 4,
            "x": 63,
            "y": 39,
            "qualifier": "away"
        }, {
            "order": 3,
            "x": 80,
            "y": 31,
            "qualifier": "away"
        }, {
            "order": 2,
            "x": 90,
            "y": 47,
            "qualifier": "away"
        }, {
            "order": 1,
            "x": 90,
            "y": 47,
            "qualifier": "home"
        }]
    },
    "lineups": {
        "competitors": [{
            "id": "sr:competitor:4901",
            "name": "MKS Cracovia Krakow",
            "country": "Poland",
            "country_code": "POL",
            "abbreviation": "CRA",
            "qualifier": "home",
            "gender": "male",
            "players": [{
                "id": "sr:player:53997",
                "name": "Hrosso, Lukas",
                "type": "goalkeeper",
                "date_of_birth": "1987-04-19",
                "nationality": "Slovakia",
                "country_code": "SVK",
                "height": 195,
                "weight": 90,
                "jersey_number": 31,
                "preferred_foot": "both"
            }, {
                "id": "sr:player:50990",
                "name": "Rapa, Cornel",
                "type": "defender",
                "date_of_birth": "1990-01-16",
                "nationality": "Romania",
                "country_code": "ROU",
                "height": 180,
                "weight": 72,
                "jersey_number": 2,
                "preferred_foot": "right",
                "played": true
            }, {
                "id": "sr:player:552342",
                "name": "Dimun, Milan",
                "type": "midfielder",
                "date_of_birth": "1996-09-19",
                "nationality": "Slovakia",
                "country_code": "SVK",
                "height": 186,
                "weight": 76,
                "jersey_number": 15,
                "played": true
            }, {
                "id": "sr:player:283855",
                "name": "Fiolic, Ivan",
                "type": "midfielder",
                "date_of_birth": "1996-04-29",
                "nationality": "Croatia",
                "country_code": "HRV",
                "height": 176,
                "weight": 73,
                "jersey_number": 14,
                "preferred_foot": "left"
            }, {
                "id": "sr:player:1838980",
                "name": "Thiago",
                "type": "midfielder",
                "date_of_birth": "1997-03-18",
                "nationality": "Brazil",
                "country_code": "BRA",
                "height": 177,
                "weight": 60,
                "jersey_number": 21,
                "played": true
            }, {
                "id": "sr:player:960572",
                "name": "Loshaj, Florian",
                "type": "midfielder",
                "date_of_birth": "1996-08-13",
                "nationality": "Kosovo",
                "country_code": "KOS",
                "height": 174,
                "jersey_number": 22,
                "preferred_foot": "left",
                "played": true
            }, {
                "id": "sr:player:819758",
                "name": "Piszczek, Filip",
                "type": "forward",
                "date_of_birth": "1995-05-26",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 188,
                "weight": 77,
                "jersey_number": 26,
                "preferred_foot": "right"
            }, {
                "id": "sr:player:2058377",
                "name": "Myszor, Jakub",
                "type": "midfielder",
                "date_of_birth": "2002-06-07",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 175,
                "weight": 66,
                "jersey_number": 38,
                "played": true
            }, {
                "id": "sr:player:2159254",
                "name": "Bracik, Krystian",
                "type": "defender",
                "date_of_birth": "2001-03-18",
                "nationality": "Poland",
                "country_code": "POL",
                "jersey_number": 14
            }, {
                "id": "sr:player:1238928",
                "name": "Niemczycki, Karol",
                "type": "goalkeeper",
                "date_of_birth": "1999-07-05",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 189,
                "jersey_number": 23,
                "preferred_foot": "both",
                "starter": true,
                "played": true,
                "order": 1,
                "position": "goalkeeper"
            }, {
                "id": "sr:player:52005",
                "name": "Ferraresso, Diego",
                "type": "defender",
                "date_of_birth": "1992-05-21",
                "nationality": "Bulgaria",
                "country_code": "BGR",
                "height": 171,
                "weight": 65,
                "jersey_number": 22,
                "preferred_foot": "right",
                "starter": true,
                "played": true,
                "order": 5,
                "position": "left_back"
            }, {
                "id": "sr:player:576188",
                "name": "Rodin, Matej",
                "type": "defender",
                "date_of_birth": "1996-02-13",
                "nationality": "Bosnia & herzegovina",
                "country_code": "BIH",
                "height": 193,
                "weight": 88,
                "jersey_number": 88,
                "preferred_foot": "both",
                "starter": true,
                "played": true,
                "order": 4,
                "position": "central_defender"
            }, {
                "id": "sr:player:1083456",
                "name": "Marquez, Ivan",
                "type": "defender",
                "date_of_birth": "1994-06-09",
                "nationality": "Spain",
                "country_code": "ESP",
                "height": 191,
                "weight": 80,
                "jersey_number": 4,
                "preferred_foot": "right",
                "starter": true,
                "played": true,
                "order": 3,
                "position": "central_defender"
            }, {
                "id": "sr:player:44777",
                "name": "Budzinski, Marcin",
                "type": "midfielder",
                "date_of_birth": "1990-07-06",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 184,
                "weight": 80,
                "jersey_number": 27,
                "preferred_foot": "right",
                "starter": true,
                "played": true,
                "order": 2,
                "position": "right_back"
            }, {
                "id": "sr:player:1240490",
                "name": "Lusiusz, Sylwester",
                "type": "midfielder",
                "date_of_birth": "1999-09-18",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 185,
                "weight": 75,
                "jersey_number": 6,
                "starter": true,
                "played": true,
                "order": 7,
                "position": "central_midfielder"
            }, {
                "id": "sr:player:113743",
                "name": "Hanca, Sergiu Catalin",
                "type": "midfielder",
                "date_of_birth": "1992-04-04",
                "nationality": "Romania",
                "country_code": "ROU",
                "height": 182,
                "weight": 80,
                "jersey_number": 4,
                "preferred_foot": "right",
                "starter": true,
                "played": true,
                "order": 6,
                "position": "central_midfielder"
            }, {
                "id": "sr:player:1091646",
                "name": "Zaucha, Patryk",
                "type": "midfielder",
                "date_of_birth": "2000-04-19",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 175,
                "weight": 67,
                "jersey_number": 73,
                "preferred_foot": "left",
                "starter": true,
                "played": true,
                "order": 10,
                "position": "left_winger"
            }, {
                "id": "sr:player:318585",
                "name": "Amersfoort, Pelle van",
                "type": "midfielder",
                "date_of_birth": "1996-04-01",
                "nationality": "Netherlands",
                "country_code": "NLD",
                "height": 193,
                "weight": 77,
                "jersey_number": 10,
                "starter": true,
                "played": true,
                "order": 9,
                "position": "central_midfielder"
            }, {
                "id": "sr:player:1400705",
                "name": "Pik, Daniel",
                "type": "forward",
                "date_of_birth": "2000-07-20",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 177,
                "weight": 74,
                "starter": true,
                "played": true,
                "order": 8,
                "position": "right_winger"
            }, {
                "id": "sr:player:178883",
                "name": "Alvarez, Marcos",
                "type": "forward",
                "date_of_birth": "1991-09-30",
                "nationality": "Germany",
                "country_code": "DEU",
                "height": 179,
                "weight": 81,
                "jersey_number": 9,
                "preferred_foot": "right",
                "starter": true,
                "played": true,
                "order": 11,
                "position": "striker"
            }],
            "jersey": {
                "type": "home",
                "base": "ff0000",
                "sleeve": "ff0000",
                "number": "000000",
                "squares": false,
                "stripes": true,
                "stripes_color": "ffffff",
                "horizontal_stripes": false,
                "split": false,
                "shirt_type": "short_sleeves",
                "sleeve_detail": "000000"
            },
            "manager": {
                "id": "sr:player:71185",
                "name": "Probierz, Michal",
                "date_of_birth": "1972-09-24",
                "nationality": "Poland",
                "country_code": "POL"
            },
            "formation": {
                "type": "4-2-3-1"
            }
        }, {
            "id": "sr:competitor:7922",
            "name": "KS Warta Poznan",
            "country": "Poland",
            "country_code": "POL",
            "abbreviation": "WAR",
            "qualifier": "away",
            "gender": "male",
            "players": [{
                "id": "sr:player:1513541",
                "name": "Bielica, Daniel",
                "type": "goalkeeper",
                "date_of_birth": "1999-04-30",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 189,
                "jersey_number": 1
            }, {
                "id": "sr:player:1543533",
                "name": "Kuzimski, Mateusz",
                "type": "forward",
                "date_of_birth": "1991-06-26",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 179,
                "jersey_number": 9,
                "played": true
            }, {
                "id": "sr:player:846301",
                "name": "Kuzdra, Jakub",
                "type": "midfielder",
                "date_of_birth": "1997-12-08",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 178,
                "weight": 78,
                "preferred_foot": "right"
            }, {
                "id": "sr:player:250313",
                "name": "Kopczynski, Michal",
                "type": "midfielder",
                "date_of_birth": "1992-06-15",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 180,
                "weight": 65,
                "jersey_number": 15,
                "preferred_foot": "both",
                "played": true
            }, {
                "id": "sr:player:221956",
                "name": "Rybicki, Mariusz",
                "type": "forward",
                "date_of_birth": "1993-03-13",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 175,
                "weight": 65,
                "preferred_foot": "left"
            }, {
                "id": "sr:player:902430",
                "name": "Janicki, Robert",
                "type": "midfielder",
                "date_of_birth": "1997-06-07",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 171,
                "weight": 67,
                "preferred_foot": "right",
                "played": true
            }, {
                "id": "sr:player:1017899",
                "name": "Jaroch, Gracjan",
                "type": "forward",
                "date_of_birth": "1998-04-15",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 171,
                "weight": 66
            }, {
                "id": "sr:player:1643792",
                "name": "Burman, Bartlomiej",
                "type": "midfielder",
                "date_of_birth": "2001-05-01",
                "nationality": "Poland",
                "country_code": "POL"
            }, {
                "id": "sr:player:72409",
                "name": "Lis, Adrian",
                "type": "goalkeeper",
                "date_of_birth": "1992-05-28",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 192,
                "weight": 78,
                "jersey_number": 1,
                "preferred_foot": "right",
                "starter": true,
                "played": true,
                "order": 1,
                "position": "goalkeeper"
            }, {
                "id": "sr:player:816468",
                "name": "Grzesik, Jan",
                "type": "defender",
                "date_of_birth": "1994-10-21",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 178,
                "weight": 70,
                "jersey_number": 2,
                "preferred_foot": "right",
                "starter": true,
                "played": true,
                "order": 2,
                "position": "right_back"
            }, {
                "id": "sr:player:1357782",
                "name": "Nawrocki, Maik",
                "type": "defender",
                "date_of_birth": "2001-02-07",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 185,
                "jersey_number": 17,
                "preferred_foot": "both",
                "starter": true,
                "played": true,
                "order": 3,
                "position": "central_defender"
            }, {
                "id": "sr:player:821170",
                "name": "Ivanov, Robert",
                "type": "defender",
                "date_of_birth": "1994-09-19",
                "nationality": "Finland",
                "country_code": "FIN",
                "height": 197,
                "weight": 85,
                "jersey_number": 4,
                "preferred_foot": "right",
                "starter": true,
                "played": true,
                "order": 4,
                "position": "central_defender"
            }, {
                "id": "sr:player:162901",
                "name": "Kielb, Jakub",
                "type": "defender",
                "date_of_birth": "1993-07-15",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 176,
                "weight": 73,
                "jersey_number": 3,
                "preferred_foot": "left",
                "starter": true,
                "played": true,
                "order": 5,
                "position": "left_back"
            }, {
                "id": "sr:player:804022",
                "name": "Rodriguez, Mario",
                "type": "midfielder",
                "date_of_birth": "1997-03-03",
                "nationality": "Spain",
                "country_code": "ESP",
                "height": 180,
                "weight": 64,
                "jersey_number": 7,
                "preferred_foot": "right",
                "starter": true,
                "played": true,
                "order": 7,
                "position": "central_midfielder"
            }, {
                "id": "sr:player:44957",
                "name": "Tralka, Lukasz",
                "type": "midfielder",
                "date_of_birth": "1984-05-11",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 186,
                "weight": 77,
                "jersey_number": 6,
                "preferred_foot": "right",
                "starter": true,
                "played": true,
                "order": 6,
                "position": "central_midfielder"
            }, {
                "id": "sr:player:969053",
                "name": "Baku, Makana",
                "type": "forward",
                "date_of_birth": "1998-04-08",
                "nationality": "Germany",
                "country_code": "DEU",
                "height": 177,
                "weight": 70,
                "jersey_number": 14,
                "preferred_foot": "right",
                "starter": true,
                "played": true,
                "order": 8,
                "position": "right_winger"
            }, {
                "id": "sr:player:120927",
                "name": "Kupczak, Mateusz",
                "type": "midfielder",
                "date_of_birth": "1992-02-20",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 185,
                "weight": 72,
                "jersey_number": 21,
                "starter": true,
                "played": true,
                "order": 9,
                "position": "central_midfielder"
            }, {
                "id": "sr:player:1011047",
                "name": "Czyzycki, Mateusz",
                "type": "midfielder",
                "date_of_birth": "1998-02-08",
                "nationality": "Poland",
                "country_code": "POL",
                "jersey_number": 17,
                "starter": true,
                "played": true,
                "order": 11,
                "position": "striker"
            }, {
                "id": "sr:player:220793",
                "name": "Jakobowski, Michal",
                "type": "midfielder",
                "date_of_birth": "1992-09-08",
                "nationality": "Poland",
                "country_code": "POL",
                "height": 170,
                "weight": 65,
                "jersey_number": 11,
                "preferred_foot": "both",
                "starter": true,
                "played": true,
                "order": 10,
                "position": "left_winger"
            }],
            "jersey": {
                "type": "home",
                "base": "3a996a",
                "sleeve": "0a700a",
                "number": "fcfcfc",
                "squares": false,
                "stripes": false,
                "horizontal_stripes": false,
                "split": false,
                "shirt_type": "short_sleeves",
                "sleeve_detail": "0a700a"
            },
            "manager": {
                "id": "sr:player:358436",
                "name": "Tworek, Piotr",
                "date_of_birth": "1975-03-10",
                "nationality": "Poland",
                "country_code": "POL"
            },
            "formation": {
                "type": "4-2-3-1"
            }
        }]
    }
}

export default MatchData;