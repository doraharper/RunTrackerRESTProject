-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema rundb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `rundb` ;

-- -----------------------------------------------------
-- Schema rundb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rundb` DEFAULT CHARACTER SET utf8 ;
USE `rundb` ;

-- -----------------------------------------------------
-- Table `run`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `run` ;

CREATE TABLE IF NOT EXISTS `run` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` VARCHAR(45) NOT NULL,
  `age` INT(2) NULL,
  `distance_in_miles` DOUBLE NOT NULL,
  `total_time_in_minutes` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO iwasrunning@localhost;
 DROP USER iwasrunning@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'iwasrunning'@'localhost' IDENTIFIED BY 'shinsplints';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'iwasrunning'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `run`
-- -----------------------------------------------------
START TRANSACTION;
USE `rundb`;
INSERT INTO `run` (`id`, `date`, `name`, `age`, `distance_in_miles`, `total_time_in_minutes`) VALUES (1, '2018-05-02', 'dharps', 32, 3.0, 27);
INSERT INTO `run` (`id`, `date`, `name`, `age`, `distance_in_miles`, `total_time_in_minutes`) VALUES (2, '2018-05-02', 'runnerlover', 52, 10.0, 90);

COMMIT;
