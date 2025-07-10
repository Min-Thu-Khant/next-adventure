export enum Rooms {
    ENTRANCE_HALL = "Entrance Hall",
    DINNING_ROOOM = "Dinning Room" ,
    KITCHEN= "Kitchen",
    LIBRARY="Library",
    LIVING_ROOM="Living Room",
    STUDY_ROOM = "Study Room",
    GARDEN = "Garden",
    STORAGE_ROOM="Storage Room",
    HALLWAY="Hallway",
    TREASURE_ROOM = "Treasure Room"
}

export enum Items {
    MAP = "Map",
    SILVER_KEY = "Silver Key",
    TORCH = "Torch",
    CRYSTAL = "Crystal",
    PORTION = "Portion",
    GOLDEN_KEY = "Golden Key"
}

export enum Directions {
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    UP = "UP",
    DOWN = "DOWN"
}

export const rooms =[
        { 
            name: Rooms.ENTRANCE_HALL , 
            item: Items.MAP, 
            available_rooms: [ 
                { room: Rooms.DINNING_ROOOM , direction: Directions.RIGHT}
            ], 
            isDark: false 
        },
        { 
            name: Rooms.DINNING_ROOOM , 
            item: Items.SILVER_KEY, 
            available_rooms: [ 
                { room: Rooms.ENTRANCE_HALL , direction: Directions.LEFT},
                { room: Rooms.KITCHEN , direction: Directions.RIGHT}
            ], 
            isDark: false 
        },
        { 
            name: Rooms.KITCHEN , 
            item: Items.PORTION, 
            available_rooms: [ 
                { room: Rooms.STUDY_ROOM , direction: Directions.DOWN},
                { room: Rooms.DINNING_ROOOM , direction: Directions.LEFT},
            ], 
            isDark: false 
        },
        { 
            name: Rooms.LIBRARY , 
            item: null, 
            available_rooms: [ 
                { room: Rooms.LIVING_ROOM , direction: Directions.RIGHT},
                { room: Rooms.GARDEN , direction: Directions.DOWN},
            ], 
            isDark: false 
        },
        { 
            name: Rooms.LIVING_ROOM , 
            item: Items.TORCH, 
            available_rooms: [ 
                { room: Rooms.STUDY_ROOM , direction: Directions.RIGHT},
                { room: Rooms.LIBRARY , direction: Directions.LEFT},
            ], 
            isDark: false 
        },
        { 
            name: Rooms.STUDY_ROOM , 
            item: null, 
            available_rooms: [ 
                { room: Rooms.KITCHEN , direction: Directions.UP},
                { room: Rooms.LIVING_ROOM , direction: Directions.LEFT},
            ], 
            isDark: false 
        },
        
        { 
            name: Rooms.GARDEN , 
            item: Items.CRYSTAL, 
            available_rooms: [ 
                { room: Rooms.LIBRARY , direction: Directions.UP},
                { room: Rooms.STORAGE_ROOM , direction: Directions.RIGHT},
            ], 
            isDark: false 
        },
        { 
            name: Rooms.STORAGE_ROOM , 
            item: null, 
            available_rooms: [ 
                { room: Rooms.GARDEN , direction: Directions.LEFT},
                { room: Rooms.HALLWAY , direction: Directions.RIGHT},
            ], 
            isDark: false 
        },
        
         { 
            name: Rooms.HALLWAY , 
            item: null, 
            available_rooms: [ 
                { room: Rooms.TREASURE_ROOM , direction: Directions.RIGHT},
                { room: Rooms.STORAGE_ROOM , direction: Directions.LEFT},
            ], 
            isDark: true 
        },
    ]