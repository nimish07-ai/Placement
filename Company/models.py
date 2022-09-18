from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class Company(models.Model):
    Company_name = models.CharField(max_length=30, null=True, blank=False)
    Employers_Website = models.URLField(blank=True, null=True)
    Company_logo = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.Company_name


class Visiting_company_record(models.Model):
    company = models.ForeignKey(Company, related_name='Visiting_record', on_delete=models.CASCADE)
    visiting_date = models.DateField()

    MinLpa_offered = models.DecimalField(max_digits=4, decimal_places=2,
                                         validators=[MinValueValidator(0.0), MaxValueValidator(99.99)])
    MaxLpa_offered = models.DecimalField(max_digits=4, decimal_places=2,
                                         validators=[MinValueValidator(0.0), MaxValueValidator(99.99)])

    Description = models.TextField(blank=True, null=True)
    Pdf = models.FileField(blank=True, null=True)
    Company_image = models.ImageField(blank=True, null=True)

    def __str__(self):
        return f"{self.company.Company_name} {self.visiting_date}"

