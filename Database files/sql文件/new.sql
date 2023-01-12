CREATE TABLE IF NOT EXISTS `user49DB1`.`Breadth` (
  `BreathID` INT(11) NOT NULL,
  `BreathName` VARCHAR(64) NOT NULL,

  PRIMARY KEY (`BreathID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `user49DB1`.`BreadthBridge` (
 `BBID` INT(11) NOT NULL,
  `BreathID` INT(11) NOT NULL,
  `CourseID` INT(11) NOT NULL,
    PRIMARY KEY (`BBID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


CREATE TABLE IF NOT EXISTS `user49DB1`.`GenEd` (
 `GenEdID` INT(11) NOT NULL,
  `GenEdName` VARCHAR(64) NOT NULL,
    PRIMARY KEY (`GenEdID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `user49DB1`.`GenEdBridge` (
  `GBID` INT(11) NOT NULL,
  `GenEdID` INT(11) NOT NULL,
  `CourseID` INT(11)NOT NULL,
    PRIMARY KEY (`GBID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


CREATE TABLE IF NOT EXISTS `user49DB1`.`CourseLevel` (
 `CourseLevelID` INT(11) NOT NULL,
 `CourseID` INT(11) NOT NULL,
 `CourseLevel` VARCHAR(64) NOT NULL,
  
    PRIMARY KEY (`CourseLevelID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;



-- -----------------------------------------------------
-- Table `user24DB3`.`PROFESSOR`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`PROFESSOR` (
  `ProfessorID` INT(11) NOT NULL,
  `ProfessorName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ProfessorID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `user24DB3`.`SECTION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`SECTION` (
  `SectionID` INT(11) NOT NULL COMMENT 'This is a bridge table of Course and Professor',
  `CourseID` INT(11) NOT NULL,
  `ProfessorID` INT(11) NOT NULL,
  `SectionName` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`SectionID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user24DB3`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`USER` (
  `UserID` INT(11) NOT NULL,
  `UserEmail` VARCHAR(45) NOT NULL,
  `UserPassword` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`UserID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user24DB3`.`COMMENT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`COMMENT` (
  `CommentID` INT(11) NOT NULL,
  `ParentID` INT(11) NOT NULL,
  `CommentContent` VARCHAR(45) NULL DEFAULT NULL,
  `SectionID` INT(11) NOT NULL,
  `UserID` INT(11) NOT NULL,
  `CommentTimestamp` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`CommentID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user24DB3`.`MAJOR`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`MAJOR` (
  `MajorID` INT(11) NOT NULL,
  `MajorName` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`MajorID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user24DB3`.`ENROLL`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`ENROLL` (
  `EnrollmentID` INT(11) NOT NULL COMMENT 'This is a bridge table of Major and Course',
  `MajorID` INT(11) NULL,
  `CourseID` INT(11) NOT NULL,
  `EnrollmentNote` VARCHAR(45) NULL DEFAULT NULL,
PRIMARY KEY (`EnrollmentID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

