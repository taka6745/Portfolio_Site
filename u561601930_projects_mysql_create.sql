CREATE TABLE `projects` (
	`Id` int(1000) NOT NULL AUTO_INCREMENT,
	`Title` varchar(500) NOT NULL,
	`Type` varchar(255) NOT NULL,
	`Description` TEXT NOT NULL,
	`Date_uploaded` DATE NOT NULL,
	`Date_updated` DATE NOT NULL,
	`Tags` varchar(255) NOT NULL,
	`Image_link` varchar(1000) NOT NULL,
	`Related_projects` varchar(255),
	PRIMARY KEY (`Id`)
);


