
CREATE SCHEMA IF NOT EXISTS `user49DB1` DEFAULT CHARACTER SET utf8 ;
USE `user49DB1` ;

-- -----------------------------------------------------
-- Table `user49DB1`.`Breadth`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`Breadth` (
  `BreathID` INT(11) NOT NULL,
  `BreathName` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`BreathID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user49DB1`.`Course`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`Course` (
  `CourseID` INT(11) NOT NULL,
  `CourseWithCategoryID` VARCHAR(30) NULL DEFAULT NULL,
  `CourseCategoryID` INT(11) NULL DEFAULT NULL,
  `CourseTitle` VARCHAR(600) NULL DEFAULT NULL,
  `CourseDescrip` LONGTEXT NULL DEFAULT NULL,
  `CourseCredits` VARCHAR(30) NULL DEFAULT NULL,
  `CourseReferenceID` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`CourseID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user49DB1`.`BreadthBridge`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`BreadthBridge` (
  `BBID` INT(11) NOT NULL,
  `BreathID` INT(11) NOT NULL,
  `CourseID` INT(11) NOT NULL,
  PRIMARY KEY (`BBID`),
  INDEX `couseid2_idx` (`CourseID` ASC) VISIBLE,
  INDEX `bid_idx` (`BreathID` ASC) VISIBLE,
  CONSTRAINT `couseid2`
    FOREIGN KEY (`CourseID`)
    REFERENCES `user49DB1`.`Course` (`CourseID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `bid`
    FOREIGN KEY (`BreathID`)
    REFERENCES `user49DB1`.`Breadth` (`BreathID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user49DB1`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`USER` (
  `UserID` INT(11) NOT NULL,
  `UserEmail` VARCHAR(45) NOT NULL,
  `UserPassword` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`UserID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user49DB1`.`PROFESSOR`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`PROFESSOR` (
  `ProfessorID` INT(11) NOT NULL,
  `ProfessorName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ProfessorID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user49DB1`.`SECTION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`SECTION` (
  `SectionID` INT(11) NOT NULL COMMENT 'This is a bridge table of Course and Professor',
  `CourseID` INT(11) NOT NULL,
  `ProfessorID` INT(11) NOT NULL,
  `SectionName` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`SectionID`),
  INDEX `couseid5_idx` (`CourseID` ASC) VISIBLE,
  INDEX `professorid_idx` (`ProfessorID` ASC) VISIBLE,
  CONSTRAINT `couseid5`
    FOREIGN KEY (`CourseID`)
    REFERENCES `user49DB1`.`Course` (`CourseID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `professorid`
    FOREIGN KEY (`ProfessorID`)
    REFERENCES `user49DB1`.`PROFESSOR` (`ProfessorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `user49DB1`.`Grade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Grade` (
  `SectionID` INT NOT NULL,
  `SemesterCode` INT NULL,
  `SemesterName` VARCHAR(45) NULL,
  `Gpa` DECIMAL(2,4) NULL,
  `GradeCountA` INT NULL,
  `GradeCountAb` INT NULL,
  `GradeCountB` INT NULL,
  `GradeCountBc` INT NULL,
  `GradeCountC` INT NULL,
  `GradeCountD` INT NULL,
  `GradeCountF` INT NULL,
  `GradeCountSd` INT NULL,
  `GradeCountUd` INT NULL,
  `GradeCountOther` INT NULL,
  `GradeCountTotal` INT NULL,
  PRIMARY KEY (`SectionID`),
  CONSTRAINT `Sectionid`
    FOREIGN KEY (`SectionID`)
    REFERENCES `user49DB1`.`SECTION` (`SectionID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `user49DB1`.`COMMENT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`COMMENT` (
  `CommentID` INT(11) NOT NULL,
  `ParentID` INT(11) NOT NULL,
  `CommentContent` VARCHAR(45) NULL DEFAULT NULL,
  `SectionID` INT(11) NOT NULL,
  `UserID` INT(11) NOT NULL,
  `CommentTimestamp` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`CommentID`),
  INDEX `userid1_idx` (`UserID` ASC) VISIBLE,
  INDEX `sectionid1_idx` (`SectionID` ASC) VISIBLE,
  CONSTRAINT `userid1`
    FOREIGN KEY (`UserID`)
    REFERENCES `user49DB1`.`USER` (`UserID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `sectionid1`
    FOREIGN KEY (`SectionID`)
    REFERENCES `user49DB1`.`SECTION` (`SectionID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user49DB1`.`CourseLevel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`CourseLevel` (
  `CourseLevelID` INT(11) NOT NULL,
  `CourseID` INT(11) NOT NULL,
  `CourseLevel` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`CourseLevelID`),
  INDEX `couseid3_idx` (`CourseID` ASC) VISIBLE,
  CONSTRAINT `couseid3`
    FOREIGN KEY (`CourseID`)
    REFERENCES `user49DB1`.`Course` (`CourseID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user49DB1`.`Major`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`Major` (
  `MajorID` INT(11) NOT NULL,
  `MajorName` TEXT NULL DEFAULT NULL,
  `MajorShortName` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`MajorID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user49DB1`.`ENROLL`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`ENROLL` (
  `EnrollmentID` INT(11) NOT NULL COMMENT 'This is a bridge table of Major and Course',
  `MajorID` INT(11) NULL DEFAULT NULL,
  `CourseID` INT(11) NOT NULL,
  `EnrollmentNote` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`EnrollmentID`),
  INDEX `couseid4_idx` (`CourseID` ASC) VISIBLE,
  INDEX `majorid_idx` (`MajorID` ASC) VISIBLE,
  CONSTRAINT `couseid4`
    FOREIGN KEY (`CourseID`)
    REFERENCES `user49DB1`.`Course` (`CourseID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `majorid`
    FOREIGN KEY (`MajorID`)
    REFERENCES `user49DB1`.`Major` (`MajorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user49DB1`.`GenEd`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`GenEd` (
  `GenEdID` INT(11) NOT NULL,
  `GenEdName` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`GenEdID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `user49DB1`.`GenEdBridge`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`GenEdBridge` (
  `GBID` INT(11) NOT NULL,
  `GenEdID` INT(11) NOT NULL,
  `CourseID` INT(11) NOT NULL,
  PRIMARY KEY (`GBID`),
  INDEX `genedid_idx` (`GenEdID` ASC) VISIBLE,
  INDEX `courseid1_idx` (`CourseID` ASC) VISIBLE,
  CONSTRAINT `genedid`
    FOREIGN KEY (`GenEdID`)
    REFERENCES `user49DB1`.`GenEd` (`GenEdID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `courseid1`
    FOREIGN KEY (`CourseID`)
    REFERENCES `user49DB1`.`Course` (`CourseID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


