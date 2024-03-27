<div ng-app="myApp">
    <div class="drop-menu" ng-class="{mobile: isScreenLarge}" ng-controller="myController">
        <div>@{{viewMode}}</div>
        <button ng-click="handleToggleDropdown($event)">teste drop menu</button>
        <div ng-show="isOpen === true" class="drop-down">
            <div class="left-side" ng-class="" ng-show="isScreenLarge && viewMode === 'left' || !isScreenLarge">
                <button ng-click="closeDropdown()" ng-show="isScreenLarge">X</button>
                <ul>
                    <li><button ng-click="addValues('a')">Eletrodomésticos</button></li>
                    <li><button ng-click="addValues('b')">Eletrodomésticos</button></li>
                    <li><button ng-click="addValues('c')">Eletrodomésticos</button></li>
                    <li><button>Eletrodomésticos</button></li>
                    <li><button>Eletrodomésticos</button></li>
                    <li><button>Eletrodomésticos</button></li>
                    <li><button>Eletrodomésticos</button></li>
                </ul>
            </div>
            <div class="right-side" ng-show="isScreenLarge && viewMode === 'right' || !isScreenLarge">
                <button ng-click="resetViewMode()" ng-show="isScreenLarge"><-</button>
                <ul>
                    <li ng-repeat="teste in values">@{{teste}}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
