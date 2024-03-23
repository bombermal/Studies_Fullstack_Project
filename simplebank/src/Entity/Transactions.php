<?php

namespace App\Entity;

use App\Repository\TransactionsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TransactionsRepository::class)]
class Transactions
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $type = null;

    #[ORM\Column(length: 255)]
    private ?string $status = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    private ?string $ammount = null;

    #[ORM\ManyToOne(inversedBy: 'transactions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Accounts $accounts = null;

    #[ORM\OneToMany(targetEntity: TransactionsHistory::class, mappedBy: 'id_transaction')]
    private Collection $transactionsHistories;

    public function __construct()
    {
        $this->transactionsHistories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getAmmount(): ?string
    {
        return $this->ammount;
    }

    public function setAmmount(string $ammount): static
    {
        $this->ammount = $ammount;

        return $this;
    }

    public function getAccounts(): ?Accounts
    {
        return $this->accounts;
    }

    public function setAccounts(?Accounts $accounts): static
    {
        $this->accounts = $accounts;

        return $this;
    }

    /**
     * @return Collection<int, TransactionsHistory>
     */
    public function getTransactionsHistories(): Collection
    {
        return $this->transactionsHistories;
    }

    public function addTransactionsHistory(TransactionsHistory $transactionsHistory): static
    {
        if (!$this->transactionsHistories->contains($transactionsHistory)) {
            $this->transactionsHistories->add($transactionsHistory);
            $transactionsHistory->setIdTransaction($this);
        }

        return $this;
    }

    public function removeTransactionsHistory(TransactionsHistory $transactionsHistory): static
    {
        if ($this->transactionsHistories->removeElement($transactionsHistory)) {
            // set the owning side to null (unless already changed)
            if ($transactionsHistory->getIdTransaction() === $this) {
                $transactionsHistory->setIdTransaction(null);
            }
        }

        return $this;
    }
}
