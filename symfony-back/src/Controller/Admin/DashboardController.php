<?php

namespace App\Controller\Admin;

// Entity
use App\Entity\Account;
use App\Entity\Client;
use App\Entity\Transaction;
use App\Entity\Transactionhistory;

use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * This class represents the dashboard controller for the admin section.
 */
class DashboardController extends AbstractDashboardController
{
    /**
     * Renders the index page of the admin dashboard.
     *
     * @return Response The response object.
     */
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);
        $url = $adminUrlGenerator->setController(ClientCrudController::class)->generateUrl();
        return $this->redirect($url);
        
    }

    /**
     * Configures the dashboard settings.
     *
     * @return Dashboard The configured dashboard object.
     */
    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Simplebank Admin')
            ->setFaviconPath('images/icon.jpg')
            ;
    }

    /**
     * Configures the menu items for the dashboard.
     *
     * @return iterable The menu items.
     */
    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoRoute('Home', 'fas fa-home', 'app_home');
        yield MenuItem::linkToCrud('Clients', 'fas fa-users', Client::class)->setDefaultSort(['id' => 'ASC']);
        yield MenuItem::linkToCrud('Accounts', 'far fa-address-card', Account::class);
        yield MenuItem::linkToCrud('Transactions', 'fas fa-coins', Transaction::class);
        yield MenuItem::linkToCrud('Transaction History', 'fas fa-balance-scale-left', Transactionhistory::class);
    }
}
