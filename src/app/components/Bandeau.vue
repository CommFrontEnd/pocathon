<template>
    <div class="o-panel-header">
        <h1 class="c-logo">
            <svg height="2em" viewBox="0 0 20 20" preserveAspectRatio="xMinYMid">
            <use xlink:href="#logo-min"></use>
            </svg>
        </h1>
        <div class="c-user menu-container js-user-menu">
            <div class="fa fa-user-circle-o c-user__ico"></div>
            Hervé Lepinard
            <div class="fa fa-angle-down"></div>
            <ul class="menu">
                <li class="menu__item"><a href="#"><span class="fa fa-gear"></span> Preferences</a>
                <li class="menu__item"><a href="/login.html"><span class="fa fa-unlock-alt"></span> Logout</a>
            </ul>
        </div>
        <div class="c-options"></div>
    </div>
</template>

<script>
export default{
    name: 'bandeau'
}
</script>
