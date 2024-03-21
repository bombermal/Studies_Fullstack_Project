-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema simplebank
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema simplebank
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `simplebank` ;
USE `simplebank` ;

-- -----------------------------------------------------
-- Table `simplebank`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `simplebank`.`clients` (
  `id_client` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `last_name` VARCHAR(155) NOT NULL,
  `email` VARCHAR(155) NOT NULL,
  `status` ENUM('active', 'inactive') NOT NULL,
  PRIMARY KEY (`id_client`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `simplebank`.`accounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `simplebank`.`accounts` (
  `id_account` INT NOT NULL AUTO_INCREMENT,
  `account_number` INT NOT NULL,
  `id_client` INT NOT NULL,
  PRIMARY KEY (`id_account`),
  INDEX `id_owner_idx` (`id_client` ASC) VISIBLE,
  CONSTRAINT `id_owner`
    FOREIGN KEY (`id_client`)
    REFERENCES `simplebank`.`clients` (`id_client`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `simplebank`.`transactions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `simplebank`.`transactions` (
  `id_transaction` INT NOT NULL AUTO_INCREMENT,
  `id_account_origin` INT NOT NULL,
  `id_account_destination` INT NOT NULL,
  `type` ENUM('debit', 'credit') NOT NULL,
  `status` ENUM('open', 'processing', 'finalized') NOT NULL,
  `date_transaction` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `amount` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id_transaction`),
  INDEX `fk_origin_acocunt_idx` (`id_account_origin` ASC) VISIBLE,
  INDEX `fk_destination_account_idx` (`id_account_destination` ASC) VISIBLE,
  CONSTRAINT `fk_origin_acocunt`
    FOREIGN KEY (`id_account_origin`)
    REFERENCES `simplebank`.`accounts` (`id_account`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_destination_account`
    FOREIGN KEY (`id_account_destination`)
    REFERENCES `simplebank`.`accounts` (`id_account`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `simplebank`.`transactions_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `simplebank`.`transactions_history` (
  `id_history` INT NOT NULL AUTO_INCREMENT,
  `id_transaction` INT NOT NULL,
  `previous_status` ENUM('open', 'processing', 'finalized') NULL,
  `new_status` ENUM('open', 'processing', 'finalized') NOT NULL,
  `updated_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id_history`),
  INDEX `fk_id_transaction_idx` (`id_transaction` ASC) VISIBLE,
  CONSTRAINT `fk_id_transaction`
    FOREIGN KEY (`id_transaction`)
    REFERENCES `simplebank`.`transactions` (`id_transaction`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
USE `simplebank`;

DELIMITER $$
USE `simplebank`$$
CREATE DEFINER = CURRENT_USER TRIGGER `simplebank`.`transactions_AFTER_INSERT` AFTER INSERT ON `transactions` FOR EACH ROW
BEGIN
	INSERT INTO `simplebank` . `transactions_history` (id_transaction, previous_status, new_status, updated_at)
	VALUES (NEW.id_transaction, null, NEW.status, NOW());
END$$

USE `simplebank`$$
CREATE 
    TRIGGER  `simplebank` . `transactions_AFTER_UPDATE`
 AFTER UPDATE ON `transactions` FOR EACH ROW 
    BEGIN 
		INSERT INTO `simplebank` . `transactions_history` (id_transaction, previous_status, new_status, updated_at)
		VALUES (NEW.id_transaction, OLD.status, NEW.status, NOW());
    END$$


DELIMITER ;
