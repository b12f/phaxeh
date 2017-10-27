/*
legend:
== are hooks
* are actions

init:
    * add player
    * generate map

---- game start ----

== beforeLocationChoose
for each player:
    == beforePlayerLocationChoose
    * choose starting location
    == afterPlayerLocationChoose
== afterLocationChoose

== beforeTurnStart
player turn loop:
    == turnStart
    * before turn events

    Start:
        == beforeResourceAllocation 
        * resource allocation starting at currentPlayer, going by turn sequence
        == afterResourceAllocation
    
    == beforePlayerActions
    Player actions:
        == beforeTradePhase
        * trade phase
        == afterTradePhase

        == beforeBuildPhase
        * build phase
        == afterBuildPhase

        == beforeWarPhase
        * war phase
        == afterWarPhase
    == afterPlayerActions

    * after turn events
    == turnEnd

== gameEnd


*/