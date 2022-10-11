<nav class="nav-primary">
  @if (has_nav_menu('primary_navigation'))
    {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right']) !!}
  @endif
</nav>