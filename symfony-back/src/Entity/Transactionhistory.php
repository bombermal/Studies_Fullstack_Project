<?php

namespace App\Entity;

use App\Repository\TransactionhistoryRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TransactionhistoryRepository::class)]
class Transactionhistory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $id_transaction = null;

    #[ORM\Column(length: 255)]
    private ?string $new_status = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdTransaction(): ?int
    {
        return $this->id_transaction;
    }

    public function setIdTransaction(int $id_transaction): static
    {
        $this->id_transaction = $id_transaction;

        return $this;
    }

    public function getNewStatus(): ?string
    {
        return $this->new_status;
    }

    public function setNewStatus(string $new_status): static
    {
        $this->new_status = $new_status;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeImmutable $updated_at): static
    {
        $this->updated_at = $updated_at;

        return $this;
    }
}
