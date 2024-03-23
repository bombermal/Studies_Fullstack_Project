<?php

namespace App\Entity;

use App\Repository\TransactionsHistoryRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TransactionsHistoryRepository::class)]
class TransactionsHistory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $new_status = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    #[ORM\ManyToOne(inversedBy: 'transactionsHistories')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Transactions $id_transaction = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getIdTransaction(): ?Transactions
    {
        return $this->id_transaction;
    }

    public function setIdTransaction(?Transactions $id_transaction): static
    {
        $this->id_transaction = $id_transaction;

        return $this;
    }
}
