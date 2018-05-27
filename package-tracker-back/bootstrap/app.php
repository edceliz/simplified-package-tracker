<?php
  use Respect\Validation\Validator;

  session_start();
  require_once(__DIR__ . '/../vendor/autoload.php');

  $container = new Slim\Container();
  $container->settings['displayErrorDetails'] = true;
  $container->settings['db'] = [
    'driver' => 'mysql',
    'host' => 'localhost',
    'database' => 'practice_xde_tracker',
    'username' => 'root',
    'password' => 'notroot'
  ];
  
  $capsule = new Illuminate\Database\Capsule\Manager;
  $capsule->addConnection($container->settings['db']);
  $capsule->setAsGlobal();
  $capsule->bootEloquent();

  $container['db'] = function ($container) use ($capsule) {
    return $capsule;
  };

  
  $container['PackageController'] = function ($container) {
    return new App\Controllers\PackageController($container);
  };
  
  $app = new Slim\App($container);
  
  require_once(__DIR__ . '/../app/routes.php');