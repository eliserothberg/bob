var connection = require('../connection/connection.js');

DELIMITER $$
    CREATE EVENT IF NOT EXISTS clear_tables
    ON SCHEDULE EVERY 1 DAY
    STARTS (CURRENT_DATE() + INTERVAL 6 HOUR + INTERVAL 1 DAY)
    ON COMPLETION PRESERVE ENABLE
    DO
    BEGIN
      DELETE FROM sales_db.Deals;
      DELETE FROM sales_db.Salespeople;
    END $$ 

DELIMITER ;

// DELIMITER $$
//     CREATE EVENT IF NOT EXISTS populate_names
//     ON SCHEDULE EVERY 1 DAY
//     STARTS (CURRENT_DATE() + INTERVAL 361 MINUTE + INTERVAL 1 DAY)
//     ON COMPLETION PRESERVE ENABLE
//     DO
//     BEGIN
//       DELETE FROM sales_db.Deals;
//       DELETE FROM sales_db.Salespeople;
//     END $$ 

// DELIMITER ;


// CREATE
//     [DEFINER = { user | CURRENT_USER }]
//     EVENT
//     [IF NOT EXISTS]
//     event_name
//     ON SCHEDULE schedule
//     [ON COMPLETION [NOT] PRESERVE]
//     [ENABLE | DISABLE | DISABLE ON SLAVE]
//     [COMMENT 'comment']
//     DO event_body;

// schedule:
//     AT timestamp [+ INTERVAL interval] ...
//   | EVERY interval
//     [STARTS timestamp [+ INTERVAL interval] ...]
//     [ENDS timestamp [+ INTERVAL interval] ...]

// interval:
//     quantity {YEAR | QUARTER | MONTH | DAY | HOUR | MINUTE |
//               WEEK | SECOND | YEAR_MONTH | DAY_HOUR | DAY_MINUTE |
//               DAY_SECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_SECOND}
