<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240323030134 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE transactions_history ADD id_transaction_id INT NOT NULL');
        $this->addSql('ALTER TABLE transactions_history ADD CONSTRAINT FK_7945C9E912A67609 FOREIGN KEY (id_transaction_id) REFERENCES transactions (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_7945C9E912A67609 ON transactions_history (id_transaction_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE transactions_history DROP CONSTRAINT FK_7945C9E912A67609');
        $this->addSql('DROP INDEX IDX_7945C9E912A67609');
        $this->addSql('ALTER TABLE transactions_history DROP id_transaction_id');
    }
}
