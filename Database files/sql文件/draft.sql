

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';



-- -----------------------------------------------------
-- Schema user24DB3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `user49DB1` DEFAULT CHARACTER SET latin1 ;


USE `user49DB1` ;

-- -----------------------------------------------------
-- Table `user24DB3`.`COURSE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`COURSE` (
  `CouseID` INT(11) NOT NULL,
  `CouseName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`CouseID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `user24DB3`.`PROFESSOR`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`PROFESSOR` (
  `ProfessorID` INT(11) NOT NULL,
  `ProfessorName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ProfessorID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `user24DB3`.`SECTION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`SECTION` (
  `SectionID` INT(11) NOT NULL COMMENT 'This is a bridge table of Course and Professor',
  `CourseID` INT(11) NOT NULL,
  `ProfessorID` INT(11) NOT NULL,
  `SectionName` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`SectionID`),
  CONSTRAINT `Ckey`
    FOREIGN KEY (`CourseID`)
    REFERENCES `user49DB1`.`COURSE` (`CouseID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ProfessorID`
    FOREIGN KEY (`ProfessorID`)
    REFERENCES `user49DB1`.`PROFESSOR` (`ProfessorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `user24DB3`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`USER` (
  `UserID` INT(11) NOT NULL,
  `UserEmail` VARCHAR(45) NOT NULL,
  `UserPassword` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`UserID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


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
  PRIMARY KEY (`CommentID`),
  CONSTRAINT `SectionID`
    FOREIGN KEY (`SectionID`)
    REFERENCES `user49DB1`.`SECTION` (`SectionID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `UserID`
    FOREIGN KEY (`UserID`)
    REFERENCES `user49DB1`.`USER` (`UserID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `user24DB3`.`MAJOR`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`MAJOR` (
  `MajorID` INT(11) NOT NULL,
  `MajorName` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`MajorID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `user24DB3`.`ENROLL`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user49DB1`.`ENROLL` (
  `EnrollmentID` INT(11) NOT NULL COMMENT 'This is a bridge table of Major and Course',
  `MajorID` INT(11) NULL,
  `CourseID` INT(11) NOT NULL,
  `EnrollmentNote` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`EnrollmentID`),
  CONSTRAINT `CourseID`
    FOREIGN KEY (`CourseID`)
    REFERENCES `user49DB1`.`COURSE` (`CouseID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `MajorID`
    FOREIGN KEY (`MajorID`)
    REFERENCES `user49DB1`.`MAJOR` (`MajorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
