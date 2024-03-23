<?php

namespace App\Repository;

use App\Entity\Transactionhistory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Transactionhistory>
 *
 * @method Transactionhistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method Transactionhistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method Transactionhistory[]    findAll()
 * @method Transactionhistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TransactionhistoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Transactionhistory::class);
    }

//    /**
//     * @return Transactionhistory[] Returns an array of Transactionhistory objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Transactionhistory
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
