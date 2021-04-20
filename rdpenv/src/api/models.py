from django.db import models


# Create your models here.

brand_choices = [
    ("APPLE", 'Apple'),
    ("SAMSUNG", 'Samsung'),
    ("MI", 'Xiaomi Mi'),
    ("OPPO", 'Oppo'),
    ("REALME", 'Realme'),
    ("VIVO", 'Vivo'),
    ("ONEPLUS", 'One Plus'),
]


class Products(models.Model):
    title = models.CharField(max_length=120)
    SKU = models.CharField(max_length=75)
    brand_Name = models.CharField(max_length=9, choices=brand_choices, default="APPLE")
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(decimal_places=2, max_digits=10000)
    image_URL = models.CharField(max_length=240, default="https://i.imgur.com/rQNuq0c.jpg")
    in_Stock = models.BooleanField(default=True)
