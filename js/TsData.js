/*
 *
 * ThingSpeak Data Loader
 * 
 * Copyright (c) 2015 Bright Things UN Ltd.
 * 
 *
 */

var TsData = function() {
    console.log("TsData Class instantiated");

    this.baseUrl = "https://api.thingspeak.com";
    this.apiKey = "";
    this.channelId  = "";

}

TsData.prototype.setBaseUrl = function(baseUrl) {
    this.baseUrl = baseUrl;
}

TsData.prototype.getBaseUrl = function() {
    return this.baseUrl;
}

TsData.prototype.setApiKey = function(apiKey) {
    this.apiKey = apiKey;
}

TsData.prototype.getApiKey = function() {
    return this.apiKey;
}

TsData.prototype.setChannelId = function(channelId) {
    this.channelId = channelId;
}

TsData.prototype.getChannelId = function() {
    return this.channelId;
}

TsData.prototype.getDataTable = function(callback) {

    console.log("TsData getDataTable called");

    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn('datetime', 'Date & Time'); 

    // get the data from thingspeak
    $.getJSON('https://api.thingspeak.com/channels/' + this.channelId + '/feeds.json?api_key=' + this.apiKey + '&results=8000&average=10', function(data) {

        console.log("Channel id: " + data.channel.id);
        console.log("Channel name: " + data.channel.name);
        console.log("Channel description: " + data.channel.description);

        if (data.channel.field1) {
            console.log("Channel field 1: " + data.channel.field1);
            dataTable.addColumn('number', data.channel.field1);
        }

        if (data.channel.field2) {
            console.log("Channel field 2: " + data.channel.field2);
            dataTable.addColumn('number', data.channel.field2);
        }

        if (data.channel.field3) {
            console.log("Channel field 3: " + data.channel.field3);
            dataTable.addColumn('number', data.channel.field3);
        }

        if (data.channel.field4) {
            console.log("Channel field 4: " + data.channel.field4);
            dataTable.addColumn('number', data.channel.field4);
        }

        if (data.channel.field5) {
            console.log("Channel field 5: " + data.channel.field5);
            dataTable.addColumn('number', data.channel.field5);
        }

        if (data.channel.field6) {
            console.log("Channel field 6: " + data.channel.field6);
            dataTable.addColumn('number', data.channel.field6);
        }

        if (data.channel.field7) {
            console.log("Channel field 7: " + data.channel.field7);
            dataTable.addColumn('number', data.channel.field7);
        }

        if (data.channel.field8) {
            console.log("Channel field 8: " + data.channel.field8);
            dataTable.addColumn('number', data.channel.field8);
        }

        console.log("Creation date: " + data.channel.created_at);
        console.log("Creation date: " + data.channel.updated_at);

        $.each( data.feeds, function( key, val ) {
            console.log("Got Feed Item: " + key);
            console.log("  Item created at: " + val.created_at);

            var row = dataTable.addRow();

            dataTable.setCell(row, 0, new Date(val.created_at));

            if (data.channel.field1) {
                console.log("  Item field 1   : " + val.field1);
                dataTable.setCell(row, 1, Number(val.field1));
            }

            if (data.channel.field2) {
                console.log("  Item field 2   : " + val.field2);
                dataTable.setCell(row, 2, Number(val.field2));
            }

            if (data.channel.field3) {
                console.log("  Item field 3   : " + val.field3);
                dataTable.setCell(row, 3, Number(val.field3));
            }

            if (data.channel.field4) {
                console.log("  Item field 4   : " + val.field4);
                dataTable.setCell(row, 4, Number(val.field4));
            }

            if (data.channel.field5) {
                console.log("  Item field 5   : " + val.field5);
                dataTable.setCell(row, 5, Number(val.field5));
            }

            if (data.channel.field6) {
                console.log("  Item field 6   : " + val.field6);
                dataTable.setCell(row, 6, Number(val.field6));
            }

            if (data.channel.field7) {
                console.log("  Item field 7   : " + val.field7);
                dataTable.setCell(row, 7, Number(val.field7));
            }

            if (data.channel.field8) {
                console.log("  Item field 8   : " + val.field8);
                dataTable.setCell(row, 8, Number(val.field8));
            }

        });

        console.log("TsData getDataTable loaded - shooting callback");

        callback();

    });


    return dataTable;
}

/* 
 * vim: ts=4 et nowrap 
 */
