<?php

namespace App\Repository;

use App\Entity\TransactionsHistory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TransactionsHistory>
 *
 * @method TransactionsHistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method TransactionsHistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method TransactionsHistory[]    findAll()
 * @method TransactionsHistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TransactionsHistoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TransactionsHistory::class);
    }

//    /**
//     * @return TransactionsHistory[] Returns an array of TransactionsHistory objects
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

//    public function findOneBySomeField($value): ?TransactionsHistory
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
