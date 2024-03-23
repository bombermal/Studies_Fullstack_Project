<?php

namespace App\Controller\Admin;

use App\Entity\Transactionhistory;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;

class TransactionhistoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Transactionhistory::class;
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield IntegerField::new('id_transaction');
        yield TextField::new('new_status');
        yield DateTimeField::new('updated_at');;
    }
}
