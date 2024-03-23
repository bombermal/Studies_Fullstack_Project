<?php

namespace App\Entity;

use App\Repository\ClientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ClientRepository::class)]
class Client
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $last_name = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\OneToMany(targetEntity: Account::class, mappedBy: 'client_id', orphanRemoval: true)]
    private Collection $account_number;

    public function __construct()
    {
        $this->account_number = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->name . ' ' . $this->last_name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->last_name;
    }

    public function setLastName(string $last_name): static
    {
        $this->last_name = $last_name;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return Collection<int, Account>
     */
    public function getAccountNumber(): Collection
    {
        return $this->account_number;
    }

    public function addAccountNumber(Account $accountNumber): static
    {
        if (!$this->account_number->contains($accountNumber)) {
            $this->account_number->add($accountNumber);
            $accountNumber->setClientId($this);
        }

        return $this;
    }

    public function removeAccountNumber(Account $accountNumber): static
    {
        if ($this->account_number->removeElement($accountNumber)) {
            // set the owning side to null (unless already changed)
            if ($accountNumber->getClientId() === $this) {
                $accountNumber->setClientId(null);
            }
        }

        return $this;
    }
}
