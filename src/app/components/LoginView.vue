<template>
        <div class="o-panel">
            <div class="o-panel-header">
            <h1 class="c-logo">
                <a href="/accountsList.html" class="header__btn fa fa-angle-left"></a>
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
            <div class="c-options">
                <a href="/accountStatistics.html"class="header__btn fa fa-line-chart"></a>
            </div>
            </div>
            <div class="o-panel-content">
            <div class="c-list-item">
                <div class="c-list-item__title">
                <div class="u-fullWidth">Compte courant
                    <div class="c-list-item__subtitle c-field c-field--left">
                    <div class="c-field__label">N° de compte:</div>
                    <div class="c-field__value">923456789012345678</div>
                    </div>
                    <div class="chart c-list-item__content">
                    <div class="js-d3-history"></div>
                    <div class="c-heading c-field">
                        <div class="field__label">Solde</div>
                        <div class="u-blank c-field__value is-valid">150.000,00 €</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="c-list-item c-field c-field--default">
                <div class="c-field__label">
                <div class="c-ico fa fa-briefcase"></div>Virement SII
                </div>
                <div class="c-field__value">+2.000.000,44 €</div>
            </div>
            <div class="c-list-item c-field c-field--default">
                <div class="c-field__label">
                <div class="c-ico fa fa-money"></div>Impôts sur le revenu
                </div>
                <div class="c-field__value is-invalid">-10,44 €</div>
            </div>
            <div class="c-list-item c-field c-field--default">
                <div class="c-field__label">
                <div class="c-ico fa fa-car"></div>Crédit voiture
                </div>
                <div class="c-field__value is-invalid">-186,44 €</div>
            </div>
            <div class="c-list-item c-field c-field--default">
                <div class="c-field__label">
                <div class="c-ico fa fa-shopping-cart"></div>Courses GeekWorkshop
                </div>
                <div class="c-field__value is-invalid">-42 €</div>
            </div>
            <div class="c-list-item c-field c-field--default">
                <div class="c-field__label">
                <div class="c-ico fa fa-user-md"></div>Médecin
                </div>
                <div class="c-field__value is-invalid">-42 €</div>
            </div>
            <div class="c-list-item c-field c-field--default">
                <div class="c-field__label">
                <div class="c-ico fa fa-building"></div>Taxe d'habitation
                </div>
                <div class="c-field__value is-invalid">-842 €</div>
            </div>
            <div class="c-list-item c-field c-field--default">
                <div class="c-field__label">
                <div class="c-ico fa fa-shopping-cart"></div>Courses
                </div>
                <div class="c-field__value is-invalid">-42 €</div>
            </div>
            <div class="c-list-item c-field c-field--default">
                <div class="c-field__label">
                <div class="c-ico fa fa-shopping-cart"></div>Courses
                </div>
                <div class="c-field__value is-invalid">-42 €</div>
            </div>
            <div class="c-list-item c-field c-field--default">
                <div class="c-field__label">
                <div class="c-ico fa fa-shopping-cart"></div>Courses
                </div>
                <div class="c-field__value is-invalid">-42 €</div>
            </div>
            <div class="c-list-item c-field c-field--default">
                <div class="c-field__label">
                <div class="c-ico fa fa-shopping-cart"></div>Courses
                </div>
                <div class="c-field__value is-invalid">-42 €</div>
            </div>
            <div class="c-list-item c-field c-field--default">
                <div class="c-field__label">
                <div class="c-ico fa fa-shopping-cart"></div>Courses
                </div>
                <div class="c-field__value is-invalid">-42 €</div>
            </div>
            <div class="c-list-item c-field c-field--default">
                <div class="c-field__label">
                <div class="c-ico fa fa-shopping-cart"></div>Courses
                </div>
                <div class="c-field__value is-invalid">-42 €</div>
            </div>
            </div>
        </div>
    </template>
<script>
    console.debug('loaded');
</script>