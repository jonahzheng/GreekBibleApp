﻿/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Core/Passage.ts" />
/// <reference path="000_MainViewModel.ts" />
/// <reference path="001_DisplayPassage.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel_ChangePassage = (function () {
                function MainViewModel_ChangePassage(owner) {
                    this.bookNumber = ko.observable(1);
                    this.book = ko.computed({
                        read: function () {
                            return Told.GreekBible.Data.BookInfo.getBookName(this.bookNumber());
                        },
                        write: function (value) {
                            this.bookNumber(Told.GreekBible.Data.BookInfo.getBookNumber(value));

                            this.chapter(1);
                            this.isChapterFocused(true);
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.chapterNumber = ko.observable(1);
                    this.chapter = ko.computed({
                        read: function () {
                            return this.chapterNumber();
                        },
                        write: function (value) {
                            this.chapterNumber(value);

                            this.verse(1);
                            this.isVerseFocused(true);
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.verseNumber = ko.observable(1);
                    this.verse = ko.computed({
                        read: function () {
                            return this.verseNumber();
                        },
                        write: function (value) {
                            this.verseNumber(value);

                            // Change Passage
                            this.owner.displayPassage.showPassage(this.bookNumber(), this.chapterNumber(), this.verseNumber());
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.bookChoices = ko.computed(function () {
                        return Told.GreekBible.Data.BookInfo.getBookNames();
                    }, this);
                    this.chapterChoices = ko.computed(function () {
                        var chapterCount = Told.GreekBible.Data.BookInfo.getChapterCount(this.bookNumber());

                        var nums = [];

                        for (var i = 0; i < chapterCount; i++) {
                            nums.push(i + 1);
                        }

                        return nums;
                    }, this);
                    this.isChapterFocused = ko.observable(false);
                    this.isVerseFocused = ko.observable(false);
                    this.owner = owner;
                    this.bookNumber(Told.GreekBible.Data.BookInfo.getBookNumber(this.owner.displayPassage.book()));
                    this.chapterNumber(this.owner.displayPassage.chapter());
                    this.verseNumber(this.owner.displayPassage.verse());
                }
                return MainViewModel_ChangePassage;
            })();
            UI.MainViewModel_ChangePassage = MainViewModel_ChangePassage;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
