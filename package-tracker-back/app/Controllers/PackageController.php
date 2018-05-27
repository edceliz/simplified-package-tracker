<?php
  namespace App\Controllers;

  use App\Models\Package;

  class PackageController extends Controller {
    function index($req, $res, $args) {
      $id = (int) $args['id'];
      $package = ['status' => false];
      if ($id) {
        $package = Package::find($id) ?: ['status' => false];
      }
      return $res->withHeader('Access-Control-Allow-Origin', '*')->withJson($package);
    }
  }