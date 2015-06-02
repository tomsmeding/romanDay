# romanDay.js

A simple `Date` to Roman date converter. Use as follows:

    > Roman=require("romanday");
    > Roman.day(new Date(2015,1,1)); //first of february; Kalendas Februariis annus 2015
    'Kal. Feb. an. MMXV'
    > Roman.day(new Date(2015,1,1),true); //expanded version
    'Kalendae Februarius annus MMXV'

The converter for the expanded Roman date is still very wrong — the date above, feb. 1st 2015, should be Kalendis Februariis annus MMXV. But yeah.

    > Roman=require("romanday");
    > Roman.num(1234);
    'MCCXXXIV'

That does work, though. `day` kind of depends on it, really.
