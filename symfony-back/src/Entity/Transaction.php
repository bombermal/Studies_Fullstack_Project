<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\TransactionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource]
#[ORM\Entity(repositoryClass: TransactionRepository::class)]
class Transaction
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'transactions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Account $account = null;

    #[ORM\Column(length: 255)]
    private ?string $type = null;

    #[ORM\Column(length: 255)]
    private ?string $status = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 15, scale: 0)]
    private ?string $ammount = null;

    #[ORM\OneToMany(targetEntity: Historic::class, mappedBy: 'transaction')]
    private Collection $historics;

    public function __construct()
    {
        $this->historics = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAccount(): ?Account
    {
        return $this->account;
    }

    public function setAccount(?Account $account): static
    {
        $this->account = $account;

        return $this;
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

    /**
     * @return Collection<int, Historic>
     */
    public function getHistorics(): Collection
    {
        return $this->historics;
    }

    public function addHistoric(Historic $historic): static
    {
        if (!$this->historics->contains($historic)) {
            $this->historics->add($historic);
            $historic->setTransaction($this);
        }

        return $this;
    }

    public function removeHistoric(Historic $historic): static
    {
        if ($this->historics->removeElement($historic)) {
            // set the owning side to null (unless already changed)
            if ($historic->getTransaction() === $this) {
                $historic->setTransaction(null);
            }
        }

        return $this;
    }
}
