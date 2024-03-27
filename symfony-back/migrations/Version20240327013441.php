<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240327013441 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE messenger_messages_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE account_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE historic_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE transaction_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE account (id INT NOT NULL, client_id INT NOT NULL, account_number INT NOT NULL, balance NUMERIC(15, 2) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_7D3656A419EB6921 ON account (client_id)');
        $this->addSql('CREATE TABLE historic (id INT NOT NULL, transaction_id INT DEFAULT NULL, status VARCHAR(255) NOT NULL, updated_at DATE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_AD52EF562FC0CB0F ON historic (transaction_id)');
        $this->addSql('CREATE TABLE transaction (id INT NOT NULL, account_id INT NOT NULL, type VARCHAR(255) NOT NULL, status VARCHAR(255) NOT NULL, created_at DATE NOT NULL, ammount NUMERIC(15, 0) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_723705D19B6B5FBA ON transaction (account_id)');
        $this->addSql('COMMENT ON COLUMN transaction.created_at IS \'(DC2Type:date_immutable)\'');
        $this->addSql('ALTER TABLE account ADD CONSTRAINT FK_7D3656A419EB6921 FOREIGN KEY (client_id) REFERENCES client (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE historic ADD CONSTRAINT FK_AD52EF562FC0CB0F FOREIGN KEY (transaction_id) REFERENCES transaction (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE transaction ADD CONSTRAINT FK_723705D19B6B5FBA FOREIGN KEY (account_id) REFERENCES account (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP TABLE messenger_messages');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE account_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE historic_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE transaction_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE messenger_messages_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE messenger_messages (id BIGSERIAL NOT NULL, body TEXT NOT NULL, headers TEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, available_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, delivered_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX idx_75ea56e016ba31db ON messenger_messages (delivered_at)');
        $this->addSql('CREATE INDEX idx_75ea56e0e3bd61ce ON messenger_messages (available_at)');
        $this->addSql('CREATE INDEX idx_75ea56e0fb7336f0 ON messenger_messages (queue_name)');
        $this->addSql('ALTER TABLE account DROP CONSTRAINT FK_7D3656A419EB6921');
        $this->addSql('ALTER TABLE historic DROP CONSTRAINT FK_AD52EF562FC0CB0F');
        $this->addSql('ALTER TABLE transaction DROP CONSTRAINT FK_723705D19B6B5FBA');
        $this->addSql('DROP TABLE account');
        $this->addSql('DROP TABLE historic');
        $this->addSql('DROP TABLE transaction');
    }
}
